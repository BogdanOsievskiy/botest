import { useState } from 'react'

import actionButtonPrev from '@/assets/icons/action_back.svg'
import actionButtonNext from '@/assets/icons/action_next.svg'
import aiSVG from '@/assets/icons/AI.svg'
import buttonAIIcon from '@/assets/icons/AI_button.svg'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTaskStore } from '@/store/taskStore'

const testText = 'Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.';
interface IconButtonProps {
  img: string
  onClick?: () => void
}

const IconButton = ({ img, onClick }: IconButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="!bg-transparent !border-0 text-black w-[34px] h-[34px] !p-0 mx-1 pointer-events-auto"
      onClick={onClick}
    >
      <img src={img} alt="" className="w-5 h-5" />
    </Button>
  )
}

export function GenerateBackgroundIdea() {
  const [text, setText] = useState('')
  const addGeneratingTask = useTaskStore((state) => state.addGeneratingTask)

  return (
    <div>
      <div className="relative mb-6">
        <Textarea
          placeholder='Your background idea'
          value={text}
          className="h-[195px] rounded-xl pt-4 px-4 resize-none pb-20"
          onChange={(e) => setText(e.target.value)}
          style={{
            scrollPaddingBottom: '50px',
          }}
        />
        <div className="absolute w-full h-15 bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent rounded-b-xl pointer-events-none">
          <div className="absolute w-full h-10 bottom-[5px] flex justify-between items-center">
            <Button variant="ghost" className="!bg-transparent !border-0 text-black font-semibold !text-xs leading-[1.2] tracking-normal pointer-events-auto">
              <img src={aiSVG} alt="AI" className="w-4 h-4" />
              Regenerate
            </Button>

            <div className="flex pr-4 pointer-events-auto">
              <IconButton img={actionButtonPrev} onClick={() => setText('')} />
              <IconButton img={actionButtonNext} onClick={() => setText(testText)} />
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-full h-12 bg-black text-white !rounded-[100px] !font-semibold !text-sm !leading-[0.8] tracking-normal"
        onClick={() => addGeneratingTask({
          id: Date.now().toString(),
          state: 'generating' as const,
          imageUrl: undefined,
          progress: 0,
          timeLeft: 180000,
        })}
      >
        <img src={buttonAIIcon} alt="buttonAIIcon" className="w-4 h-4" />
        Generate BG for 1 credit
      </Button>
    </div>
  )
}
