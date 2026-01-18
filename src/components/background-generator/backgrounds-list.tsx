import type { IBackgroundsListProps } from '@/types/background'

import { BackgroundCard } from './background-card'

export function BackgroundsList({ tasks }: IBackgroundsListProps) {
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
