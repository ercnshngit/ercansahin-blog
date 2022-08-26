import Navbar from 'components/navbar'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
  </>
  )
}

export default MyApp
