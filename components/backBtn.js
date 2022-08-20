import { useRouter } from 'next/router'
export default function BackBtn() {
    const router = useRouter()
    function getBack() {
        router.back()
    }
    return (
        <button onClick={getBack} className="flex mx-auto mt-2 justify-self-center justify-center items-center px-2 py-2 font-medium max-w-sm capitalize italic rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-700 hover:to-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span className="mx-1">Volver Atrás</span>
        </button>
    )
}