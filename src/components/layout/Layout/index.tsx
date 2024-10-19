import { ReactNode } from "react"
import Header from "../Header"
import Footer from "../Footer"

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  return(
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;