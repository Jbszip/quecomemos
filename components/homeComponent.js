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
            <div className="flex flex-wrap gap-2 justify-center mt-2">
                <Image src="/cocina.svg" alt="Logo" height={100} width={100} />
                <h1 className="self-center text-2xl lg:text-4xl font-bold text-gray-800 uppercase dark:text-white">¿Qué comemos?</h1>
            </div>
            <Search />
            <div className="flex items-center justify-center">
                <div className="inline-flex" role="group">
                    <Link href="/dulces"><button type="button" className="rounded-l py-2 border-red-800 border-2 text-red-800 px-6 text-xs leading-tight  uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out font-medium" >Dulces</button></Link>
                    <Link href="/recetas"><button type="button" className="px-6 py-2 border-t-2 border-b-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Todas las recetas</button></Link>
                    <Link href="/saladas"><button type="button" className=" rounded-r px-6 py-2 border-2 border-red-800 text-red-800 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition  duration-150 ease-inot">Saladas</button></Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 my-2">
                {
                    recomendado.map(({ titulo, descr, image, link }) => <ResultComponent title={titulo} descr={descr} image={image} link={link} />)
                }
            </div>
        </main>
    )
}