import { X } from "lucide-react"

import { GenerateBackgroundIdea } from '@/components/background-generator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  useSidebar
} from "@/components/ui/sidebar"
import { sampleTasks } from '@/data/testData'

import { BackgroundsList } from '../background-generator/backgrounds-list'

import { SideBarCard } from './sidebar-card'

export function SideBar() {
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar side="right" collapsible="offcanvas" className="w-[400px]">

      <SidebarHeader className="flex flex-row items-center justify-between px-[18px] pt-8 pb-[25px]">
        <h2 className="text-[22px] font-bold leading-[1.2]">Change background</h2>
        <X className="h-6 w-6 cursor-pointer" onClick={toggleSidebar} />
      </SidebarHeader>

      <SidebarContent className="text-left">
        <SidebarGroup className="p-0">

          <SideBarCard>
            <SideBarCard.Title>Background idea</SideBarCard.Title>
            <SideBarCard.Body>
              <GenerateBackgroundIdea />
            </SideBarCard.Body>
          </SideBarCard>
          
          <SideBarCard>
            <SideBarCard.Title>Your backgrounds</SideBarCard.Title>
            <SideBarCard.Body>
              <BackgroundsList tasks={sampleTasks} />
            </SideBarCard.Body>
          </SideBarCard>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
