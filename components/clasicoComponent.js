import ResultComponent from './resultComponent'

export default function ClasicoComponent({lista}) {
    const listaClasico = []
    lista.filter((receta) => {
        receta.estilo[0] === 0 ? listaClasico.push(receta) : console.log()
    })
    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 mb-5">
                {
                    listaClasico.map(({ titulo, descr, image, link }) => <ResultComponent key={titulo} title={titulo} descr={descr} image={image} link={link} />)
                }
            </div>
        </>
    )
}