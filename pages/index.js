import LayoutBasico from "../layouts/LayoutBasico"
import { MenuPlatforms } from "../components/Header/MenuSite/MenuSite"
import { Search } from "../components/Header/TopBar/TopBar"

export default function Home() {
  return (
    <LayoutBasico className="home">
      
      <MenuPlatforms />
      <Search />

    </LayoutBasico>
  )
}
