import { create } from "zustand";

const useLocalStore = create((set) => ({
  Localtasks: [],

  localaddTasks: (title) =>
    set((state) => ({
      Localtasks: [
        ...state.Localtasks,
        {
          id: crypto.randomUUID(),
          name: title,
          done: false,
          date: new Date().toDateString(),
        },
      ],
    })),

  clearLocalTasks: () => set({ Localtasks: [] }),
}));

export default useLocalStore;
