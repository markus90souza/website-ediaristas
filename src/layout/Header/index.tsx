import { useIsMobile } from "hooks/useIsMobile"
import { HeaderDesktop } from "./HeaderDesktop"
import { HeaderMobile } from "./HeaderMobile"

const Header = () => {
  const isMobile = useIsMobile();
  return isMobile ? (<HeaderMobile />) : ( <HeaderDesktop />)
}

export { Header }