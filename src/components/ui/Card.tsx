import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Card = ({ children }: Props) => {
  return (
    <main className="w-full overflow-hidden rounded-2xl bg-white shadow-lg md:w-[720px]">
      {children}
    </main>
  )
}

export default Card
