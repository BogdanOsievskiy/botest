import { useTaskStore } from '@/store/taskStore'

import { BackgroundCard } from './background-card'

export function BackgroundsList() {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3">
      {tasks.map((task) => (
        <BackgroundCard
          key={task.id}
          state={task.state}
          imageUrl={task.imageUrl}
          progress={task.progress}
          timeLeft={task.timeLeft}
        />
      ))}
    </div>
  )
}
