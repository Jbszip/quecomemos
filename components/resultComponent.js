export default function ResultComponent({ title, descr, image, link }) {
    return (
        <article>
            <div className="w-56 md:w-80 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="truncate hover:text-clip text-2xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p className= "truncate mt-1 text-sm text-gray-600 dark:text-gray-400 h-full">{descr}</p>
                </div>
                <img className="object-cover w-full h-52 mt-2" src={image} alt={title}  />
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <button className="px-2 py-1 text-xs font-semibold text-slate-50 uppercase transition-colors duration-200 transform bg-red-800 rounded hover:bg-red-700 focus:bg-red-700 focus:outline-none"><a href={link}>Ver receta</a></button>
                </div>
            </div>
        </article>

    )
}