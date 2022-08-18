import { useState } from "react"
import { useRouter } from 'next/router'
import getLogic from "../services/getLogic"

export default function Search(){
    const [keyword, setKeyword] = useState()
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    const router = useRouter()
    const handleSubmit = evt => {
        evt.preventDefault()
        if(keyword === undefined){
            document.getElementById('buscar').placeholder="Debes ingresar un término"
        }else{
            let path
            let city
            getLogic({keyword})
            .then(res => {
                path = res[0]
                city = res[1][1]
                router.push(`/${path}/${city}`)
            })
            
        }
    }
    return(
        <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="w-full py-3 pl-10 pr-4 bg-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:ring" placeholder="Busca una ciudad" onChange={handleChange} />
                </form>
            </div>
        </section>
    )
}
