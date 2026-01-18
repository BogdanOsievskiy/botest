import { create } from 'zustand';

import type { TaskItem } from '@/data/testData';
import { sampleTasks } from '@/data/testData';

interface TaskStore {
  tasks: TaskItem[];
  getTasks: () => TaskItem[];
  addGeneratingTask: (newTask: TaskItem) => void;
  updateTask: (id: string, updates: Partial<TaskItem>) => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: sampleTasks,
  
  getTasks: () => {
    return get().tasks;
  },
  
  addGeneratingTask: (newTask: TaskItem) => {
    set((state) => ({
      tasks: [newTask, ...state.tasks],
    }));
  },
  
  updateTask: (id: string, updates: Partial<TaskItem>) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    }));
  },
}));
