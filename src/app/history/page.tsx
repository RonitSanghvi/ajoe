import Navbar from "../navbar"
import Image from "next/image"
import { history, history2, history3 } from "../data"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notre Histoire"
}
export default function page() {
    return (
        <div>
            <Navbar image="/navbarImages/history.jpg"/>
            <div className="flex flex-col bg-customRedMedium space-y-4">
                <p className="text-2xl sm:text-3xl text-center tracking-widest py-6">LES GRANDS MAGASINS DU CAIRE</p>
                <p className="text-base sm:text-lg px-2 font-semibold text-center tracking-widest">EST-CE QUE LES SAOUDIENS PRENDRONT LA PLACE DES JUIFS D&apos;ANTAN ?</p>
                <div className="flex flex-row w-screen sm:w-2/4 m-auto px-4 items-center text-center">
                    <Image
                        src="/orosdi-backsaga.jpg"
                        alt="book image"
                        width="172"
                        height="246"
                        className="border-0 mt-8 mx-auto"
                    />
                    <p className="text-customRed font-bold">	
                        © Prof. Uri M. Kupferschmidt - Université de Haifa<br/>
                        Publie au Bulletin &quot;Bnei Ha-yeor&quot; 2007, Israel.
                    </p>
                </div>
                {history.map((data, index)=>(
                    <p className="text-customYellow px-4 text-sm text-justify" key={index}>
                        {data}
                    </p>
                ))}
                <p className="text-customYellow text-2xl font-bold pl-6 pt-6 pb-3">Le Déclin</p>
                {history2.map((data, index)=>(
                    <p className="text-customYellow px-4 text-sm text-justify" key={index}>
                        {data}
                    </p>
                ))}
                <p className="text-customYellow text-xl font-bold px-4 pt-6 pb-3">------------------------------------------------------</p>
                <p className="text-customYellow text-sm px-4 pb-10">{history3}</p>
            </div>
        </div>
    )
}