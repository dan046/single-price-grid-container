import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const BottomCard = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center md:flex-row">{children}</div>
  )
}

export default BottomCard
