import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create('
  persist(
    (set) => ({
      tasks: [],

      addTasks: (newTasks) =>
        set((state) => ({
          tasks: [...state.tasks, ...newTasks],
        })),

      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: "task-storage",
    }
  )
);

export default useStore;
