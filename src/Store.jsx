import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTasks: (newTasks) =>
        set((state) => ({
          tasks: [...state.tasks, ...newTasks],
        })),

      clearTasks: () => set({ tasks: [] }),
      updateTasks: (updated)=>set({tasks : updated}),
      deletetasks: (id) => set((state) => ({tasks: state.tasks.filter(task => task.id !== id)})),
      editTasks:(id,newName)=>set((state)=>({tasks: state.tasks.map(task => task.id === id ? {...task, name: newName} : task)}))
    }),
    {
      name: "task-storage",
    }
  )
);

export default useStore;
