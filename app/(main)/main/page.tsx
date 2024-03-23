import Link from "next/link";
import { RxCheck } from "react-icons/rx";
export default function MainPage() {
    return (
        <main className='flex w-full h-full bg-zinc-400 min-h-screen'>
        
        <Link 
        className='flex w-auto h-auto rounded-2xl p-4 absolute top-12 left-12 bg-zinc-50/20 hover:bg-zinc-50/30 text-zinc-50 hover:text-rose-600 '
        href='/'><RxCheck size={28} /></Link>
        </main>
    )
}