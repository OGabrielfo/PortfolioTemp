import Header from "../../components/header.js"
import Artes from "./portfolio/artes.js"
import Games from "./portfolio/games.js"
import Videos from "./portfolio/videos.js"
import WebDev from "./portfolio/webdev.js"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Artes />
        <Games />
        <Videos />
        <WebDev />
      </main>
    </>
  )
}
