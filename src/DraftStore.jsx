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
        },
      ],
    })),

  clearLocalTasks: () => set({ Localtasks: [] }),
}));

export default useLocalStore;
