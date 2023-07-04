import '@/styles/globals.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
