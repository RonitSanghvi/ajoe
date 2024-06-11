import Navbar from "../navbar"
import Image from "next/image"
import { history, history2, history3 } from "../data"

export default function page() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col w-screen bg-customRedMedium px-4 space-y-4">
                <p className="text-3xl text-center pb-4 tracking-widest pt-6">LES GRANDS MAGASINS DU CAIRE</p>
                <p className="text-lg font-semibold text-center pb-4 tracking-widest">EST-CE QUE LES SAOUDIENS PRENDRONT LA PLACE DES JUIFS D&apos;ANTAN ?</p>
                <div className="flex flex-row w-2/4 m-auto items-center text-center">
                    <Image
                        src="/orosdi-backsaga.jpg"
                        alt="product image 1"
                        width="172"
                        height="246"
                        className="border-0 mt-8 mx-auto"
                    />
                    <p className="text-customRed font-bold">	
                        © Prof. Uri M. Kupferschmidt - Université de Haifa<br/>
                        Publie au Bulletin "Bnei Ha-yeor" 2007, Israel.
                    </p>
                </div>
                {history.map((data, index)=>(
                    <p className="text-customYellow px-6 text-sm text-justify" key={index}>
                        {data}
                    </p>
                ))}
                <p className="text-customYellow text-2xl font-bold px-6 pt-6 pb-3">Le Déclin</p>
                {history2.map((data, index)=>(
                    <p className="text-customYellow px-6 text-sm text-justify" key={index}>
                        {data}
                    </p>
                ))}
                <p className="text-customYellow text-xl font-bold px-6 pt-6 pb-3">------------------------------------------------------</p>
                <p className="text-customYellow text-sm px-6 pb-10">{history3}</p>


            </div>
        </>
    )
}