import { CircularProgressIcon } from '@/components/icons/circular-progress-icon'
import { formatTimeLeft } from '@/lib/utils'
import type { IBackgroundCardProps } from '@/types/background'

function DefaultBackgroundContent({ imageUrl }: { imageUrl?: string }) {
  return (
    <>
      <div className="absolute top-1.5 left-2 bg-white px-1 rounded-[5px] z-10 border border-black/5 h-[19px] flex items-center justify-center">
        <p className="text-[10px] font-bold leading-[11px]">DEFAULT</p>
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
      )}
    </>
  )
}

function ImageOnlyContent({ imageUrl }: { imageUrl?: string }) {
  return imageUrl ? (
    <img
      src={imageUrl}
      alt="Background"
      className="w-full h-full object-cover"
    />
  ) : null
}

function GeneratingContent({ progress, timeLeft }: { progress: number, timeLeft: number }) {
  return (
    <div className="relative w-full h-full bg-black rounded-2xl flex items-center justify-center">
      <CircularProgressIcon progress={progress} />
      { timeLeft !== 0 ? 
        (<p className="absolute bottom-3.5 left-0 right-0 text-white text-xs font-semibold leading-none text-center">
          {formatTimeLeft(timeLeft)}
        </p>) : 
      null }
    </div>
  )
}

export function BackgroundCard({
  state,
  imageUrl,
  progress = 0,
  timeLeft = 0
}: IBackgroundCardProps) {
  const renderContent = () => {
    switch (state) {
      case 'default':
        return <DefaultBackgroundContent imageUrl={imageUrl} />
      case 'image-only':
        return <ImageOnlyContent imageUrl={imageUrl} />
      case 'generating':
        return <GeneratingContent progress={progress} timeLeft={timeLeft} />
      default:
        return null
    }
  }

  return (
    <div
      className={`relative w-[112px] h-[198px] rounded-2xl overflow-hidden ${
        state === 'default' ? 'border-2 border-black' : ''
      }`}
    >
      {renderContent()}
    </div>
  )
}
