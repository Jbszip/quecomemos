export default function ResultComponent({ title, descr, image, link }) {
    return (
        <article>
            <div className="w-56 md:w-80 overflow-hiddenrounded-lg rounded shadow-lg inverted">
                <div className="px-4 py-2">
                    <h1 className="truncate hover:text-clip text-2xl font-bold uppercase italic">{title}</h1>
                    <p className= "truncate mt-1 text-sm h-full">{descr}</p>
                </div>
                <img className="object-cover w-full h-52 mt-2" loading="lazy" src={image} alt={title}  />
                <div className="flex items-center justify-between px-4 py-2">
                    <button className="px-2 py-1 text-xs font-semibold text-slate-50 uppercase rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-700 hover:to-red-700"><a href={link}>Ver receta</a></button>
                </div>
            </div>
        </article>

    )
}