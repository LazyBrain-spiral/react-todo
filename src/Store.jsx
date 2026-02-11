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
      editTasks:(id,newName)=>set((state)=>({tasks: state.tasks.map(task => task.id === id ? {...task, name: newName} : task)})),
      showmodal: true,
      setShowmodal: (value) => set({ showmodal: value }), 
      count : 0,
      incrementCount: () => set((state) => ({ count: state.count + 1 })),
      decrementCount: () => set((state) => ({ count: state.count - 1 })),
      pendingCount: 0,
      incrementPendingCount: () => set((state) => ({ pendingCount: state.pendingCount + 1 })),
      decrementPendingCount: () => set((state) => ({ pendingCount: state.pendingCount - 1 })),
    }),
    {
      name: "task-storage",
    }
  )
);

export default useStore;
