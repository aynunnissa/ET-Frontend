import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

const SectionLayout = ({ children }: IProps) => {
  return(
    <div className="px-5 py-9 bg-white">
      {children}
    </div>
  )
}

export default SectionLayout;