import ResultComponent from './resultComponent'

export default function MeriendaComponent({ lista }) {
    const listaMerienda = []
    lista.filter((receta) => {
        receta.estilo[0] === 1 ? listaMerienda.push(receta) : console.log()
    })
    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 mb-5">
                {
                    listaMerienda.map(({ titulo, descr, image, link }) => <ResultComponent title={titulo} descr={descr} image={image} link={link} />)
                }
            </div>
        </>
    )
}