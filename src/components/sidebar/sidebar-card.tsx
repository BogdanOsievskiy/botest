import type { ReactNode } from 'react'

interface ISideBarCardProps {
  children: ReactNode
}

export function SideBarCard({ children }: ISideBarCardProps) {
  return <div className="px-[18px] pb-10.5">
    {children}
  </div>
}

export function SideBarCardTitle({ children }: ISideBarCardProps) {
  return <h4 className="text-[14px] font-semibold leading-[1.2] tracking-[0] pb-[10px]">{children}</h4>
}

export function SideBarCardBody({ children }: ISideBarCardProps) {
  return (
    <div>
      {children}
    </div>
  )
}

SideBarCard.Title = SideBarCardTitle
SideBarCard.Body = SideBarCardBody
