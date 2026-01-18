import actionButtonPrev from '@/assets/icons/action_back.svg'
import actionButtonNext from '@/assets/icons/action_next.svg'
import aiSVG from "@/assets/icons/AI.svg"
import buttonAIIcon from '@/assets/icons/AI_button.svg'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function GenerateBackgroundIdea() {
  return(
    <div>
      <div className="relative mb-6">
        <Textarea
          placeholder='Your background idea'
          defaultValue={'Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.'}
          className="h-[195px] rounded-xl pt-4 px-4 resize-none pb-20"
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
              <Button variant="ghost" className="!bg-transparent !border-0 text-black w-[34px] h-[34px] !p-0 mx-1 pointer-events-auto">
                <img src={actionButtonPrev} alt="actionButtonPrev" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="!bg-transparent !border-0 text-black w-[34px] h-[34px] !p-0 mx-1 pointer-events-auto">
                <img src={actionButtonNext} alt="actionButtonNext" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full h-12 bg-black text-white !rounded-[100px] !font-semibold !text-sm !leading-[0.8] tracking-normal">
        <img src={buttonAIIcon} alt="buttonAIIcon" className="w-4 h-4" />
        Generate BG for 1 credit
      </Button>
    </div>
  )
}
