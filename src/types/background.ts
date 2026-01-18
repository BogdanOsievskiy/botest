export type BackgroundState = 'default' | 'image-only' | 'generating'

export interface IBackgroundTask {
  id: string
  state: BackgroundState
  imageUrl?: string
  progress?: number
  timeLeft?: number
}

export interface IBackgroundCardProps {
  state: BackgroundState
  imageUrl?: string
  progress?: number
  timeLeft?: number
}

export interface IBackgroundsListProps {
  tasks: IBackgroundTask[]
}
