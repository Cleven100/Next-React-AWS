import LayoutBasico from "../layouts/LayoutBasico"
import { MenuPlatforms } from "../components/Header/MenuSite/MenuSite"

export default function Home() {
  return (
    <LayoutBasico className="home">
      <MenuPlatforms />
    </LayoutBasico>
  )
}
