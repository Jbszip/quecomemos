import Head from 'next/head'
import Footer from '../components/footer'
import HomeComponent from '../components/homeComponent'

export default function Index() {
  return (
    <div className="h-screen flex-col">
      <Head>
        <title>¿Qué comemos?</title>
        <meta name="description" content="¿Qué comemos? - Inicio" />
        <link rel="icon" href="/cocina.ico" />
      </Head>
      <HomeComponent />
      <Footer />
    </div>
  )
}
