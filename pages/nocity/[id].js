import Image from 'next/image'
import Head from 'next/head'
import img from '../../public/nocity.svg'
import BackBtn from '../../components/backBtn'
import Footer from '../../components/footer'
import Search from '../../components/Search'


export default function Error(){

    return(
        <>
            <Head>
                <title>Prueba de nuevo</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/error.ico" />
            </Head>
            <main className="flex-col flex-wrap h-screen">
                <div className="container grid gap-4 flex items-center mx-auto mt-4 h-full">
                    <h1 className="text-3xl font-semibold uppercase lg:text-4xl text-center">Ciudad inexistente</h1>
                    <Image src={img}  className="align-center" alt="Error image" width={300} height={300}/>
                    <p className="text-2xl font-semibold lg:text-3xl text-center" >No pudimos encontrar la ciudad que buscabas, prueba con otro término.</p>
                    <Search />
                    <BackBtn />
                </div>
                    <Footer />
            </main>
        </>
    )
}