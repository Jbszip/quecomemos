import Image from 'next/image'
import Link from 'next/link'
import Search from '../components/Search'
import ResultComponent from '../components/resultComponent'
import recetas from '../data/recetas.json'

export default function HomeComponent() {
    const random = recetas.todas
    const recomendado = random.slice(5, 13)
    return (
        <main>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
                <Image src="/cocina.svg" alt="Logo" height={100} width={100} />
                <h1 className="self-center text-2xl lg:text-4xl font-bold uppercase">¿Qué comemos?</h1>
            </div>
            <Search />
            <div className="flex items-center justify-center">
                <div className="inline-flex" role="group">
                    <Link href="/dulces"><button type="button" className="inline-flex items-center justify-center w-full mx-2 px-4 py-2 text-base font-medium uppercase rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-700 hover:to-red-700" >Dulces</button></Link>
                    <Link href="/recetas"><button type="button" className="inline-flex items-center justify-center w-full mx-0 px-4 py-2 text-base font-medium uppercase rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-700 hover:to-red-700">Todas las recetas</button></Link>
                    <Link href="/saladas"><button type="button" className="inline-flex items-center justify-center w-full mx-2 px-4 py-2 text-base font-medium uppercase rounded  transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-700 hover:to-red-700">Saladas</button></Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 my-2">
                {
                    recomendado.map(({ titulo, descr, image, link }) => <ResultComponent key={titulo} title={titulo} descr={descr} image={image} link={link} />)
                }
            </div>
        </main>
    )
}