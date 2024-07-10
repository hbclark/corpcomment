import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addItemToList: (text: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((item, index, array) => array.indexOf(item) === index);
  },
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (item) => item.company === state.selectedCompany
        )
      : state.feedbackItems;
  },

  addItemToList: async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      company: companyName,
      badgeLetter: companyName[0].toUpperCase(),
      daysAgo: 0,
    };
    // setFeedbackItems([...feedbackItems, newItem]);
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },
  selectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },
  fetchFeedbackItems: async () => {
    set(() => ({ isLoading: true }));
    try {
      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      set({ feedbackItems: data.feedbacks });
    } catch (error) {
      console.log(error);
    }
    set(() => ({ isLoading: false }));
  },
}));
