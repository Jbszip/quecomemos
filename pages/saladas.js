import Head from 'next/head'
import recetas from '../data/recetas.json'
import ResultComponent from '../components/resultComponent'
import Footer from '../components/footer'
import BackBtn from '../components/backBtn'


export default function Saladas() {
    const listas = recetas.todas
    const saladas = []
    listas.filter(function (receta) {
        receta.sabor == 1 ? saladas.push(receta) : console.log()
    })

    return (
        <>
            <Head>
                <title>Recetas Saladas</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/cocina.ico" />
            </Head>
            <section className="flex flex-col overflow-hidden mt-2 pb-2 divide-y-reverse divide-y-2 divide-red-800">
                <h1 className="self-center my-2 text-2xl lg:text-4xl font-bold uppercase">Lista de recetas saladas</h1>
                <BackBtn />
                <h2 className="font-bold uppercase text-2xl mx-6 my-2">Recomendaciones:</h2>
                <div className="container mx-auto lg:px-32" >
                    <div className="flex flex-wrap justify-center gap-5 mb-5">
                        {
                            saladas.map(({ titulo, descr, image, link }) => <ResultComponent key={titulo} title={titulo} descr={descr} image={image} link={link} />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}