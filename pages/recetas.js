import Head from 'next/head'
import recetas from '../data/recetas.json'
import ResultComponent from '../components/resultComponent'
import Footer from '../components/footer'
import BackBtn from '../components/backBtn'



export default function Recetas() {
    const listas = recetas.todas

    return (
        <>
            <Head>
                <title>Todas las recetas</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/cocina.ico" />
            </Head>
            <section className="flex flex-col overflow-hidden mt-2 pb-2 ">
                <h1 className="self-center my-2 text-2xl lg:text-4xl font-bold uppercase italic">Lista completa de recetas</h1>
                <BackBtn />
                <h2 className="font-bold uppercase text-2xl mx-6 my-2 italic underline">Recomendaciones:</h2>
                <div className="container mx-auto lg:px-32" >
                    <div className="flex flex-wrap justify-center gap-5 mb-5">
                        {
                            listas.map(({ titulo, descr, image, link }) => <ResultComponent key={titulo} title={titulo} descr={descr} image={image} link={link} />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}