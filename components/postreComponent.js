import ResultComponent from './resultComponent'

export default function PostreComponent({ lista }) {
    const listaPostre = []
    lista.filter((receta) => {
        receta.estilo[0] === 2 ? listaPostre.push(receta) : console.log()
    })
    return (
        <>
            <div className="flex flex-wrap justify-center gap-5">
                {
                    listaPostre.map(({ titulo, descr, image, link }) => <ResultComponent key={titulo} title={titulo} descr={descr} image={image} link={link} />)
                }
            </div>
        </>
    )
}