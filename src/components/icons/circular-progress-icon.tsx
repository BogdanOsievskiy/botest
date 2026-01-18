interface ICircularProgressIconProps {
  progress: number
}

export function CircularProgressIcon({ progress }: ICircularProgressIconProps) {
  const radius = 31.5 // 65px / 2 - 3px (border width)
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-[65px] h-[65px]">
      <svg className="w-full h-full -rotate-90">
        {/* Background circle */}
        <circle
          cx="32.5"
          cy="32.5"
          r={radius}
          stroke="white"
          strokeWidth="3"
          fill="none"
          opacity="0.2"
        />
        {/* Progress circle */}
        <circle
          cx="32.5"
          cy="32.5"
          r={radius}
          stroke="#5BF0A5"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-sm font-semibold mt-[5px]">{progress}%</p>
      </div>
    </div>
  )
}
