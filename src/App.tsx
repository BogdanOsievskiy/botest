import { SideBar } from '@/components/sidebar'
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar"

import './App.css'

function AppContent() {
  const { toggleSidebar} = useSidebar();

  return (
    <>
      <div>
        <h1 className='pb-20'>Hello there!
          <br />
          you are at the test task
          <br />
          to procced please click on the button.
        </h1>
        <SidebarInset>
          <Button onClick={toggleSidebar}>Check the SideBar</Button>
        </SidebarInset>
      </div>
      <SideBar />
    </>
  )
}

function App() {
  return (
    <SidebarProvider defaultOpen={false} >
      <AppContent />
    </SidebarProvider>
  )
}

export default App
