import ClasicoComponent from './clasicoComponent'
import MeriendaComponent from './meriendaComponent'
import PostreComponent from './postreComponent'
import recetas from '../data/recetas.json'


export default function ListComponent({climaa}) {
const lista = []
console.log(climaa)

climaa === 'frio' ? recetas.todas.filter((receta) => {
    receta.clima[0] === 0 ? lista.push(receta) : console.log()
}) : climaa === 'templado' ? recetas.todas.filter((receta) => {
    receta.clima[0] === 1 ? lista.push(receta) : console.log()
}) : climaa === 'calor' ? recetas.todas.filter((receta) => {
    receta.clima[0] === 2 ? lista.push(receta) : console.log()
}) : console.log()

    return (
        <main className="mb-4">
            <section className="overflow-hidden mt-2 pb-2 divide-y-reverse divide-y-2 divide-white">
                <h1 className="font-bold  uppercase  text-2xl mx-6 my-2 italic underline">Recomendaciones:</h1>
                <div className="container mx-auto lg:px-32" >
                    <ClasicoComponent lista={lista} />
                </div>
            </section>
            <section className="overflow-hidden mt-1 divide-y-reverse divide-y-2 divide-white">
                <h1 className="font-bold  uppercase  text-2xl mx-6 my-2 italic underline">Desayunos y Meriendas:</h1>
                <div className="container mx-auto lg:px-32">
                    <MeriendaComponent lista={lista} />
                </div>
            </section>
            <section className="overflow-hidden mt-1">
                <h1 className="font-bold  uppercase  text-2xl mx-6 my-2 italic underline">Postres:</h1>
                <div className="container mx-auto lg:px-32">
                    <PostreComponent lista={lista} />
                </div>
            </section>
        </main>
    )
}