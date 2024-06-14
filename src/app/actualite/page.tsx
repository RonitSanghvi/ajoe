import Link from "next/link"
import Navbar from "../navbar"
import Image from "next/image"
import { actualite, actualite2, actualiteImage } from "../data"
export default function page() {
  return (
    <div className="w-screen">
      <Navbar image="/navbarImages/actualite.jpg"/>
      <div className="flex flex-col bg-customRedMedium px-4 space-y-4 py-6">
        <p className="text-2xl pb-4 tracking-widest">ACTUALITE</p>
        <p className="text-2xl pb-4 text-customYellow tracking-widest">
            MÉMOIRE ET HISTOIRE:<br/>
            &apos;L&quot;ONCLE ISAAC&apos; ET/OU DR ISACCO GIUSEPPE LEVI   
        </p>
        <p className="text-customYellow">
            Conférence donnée à l&apos;occasion de l&apos;inauguration de la Chaire Joseph Barda pour l&apos;étude de l&apos;histoire de la communauté juive égyptienne, Université de Haïfa, le 14 octobre 2013 par le Professeur Kupferschmidt :
        </p>
        <ul>
            <li>Pour lire le document, cliquer ICI</li>
            <li>Pour lire le document en VO, cliquer <Link href="/PDFs/kaverman_chair_event_nov2013.pdf" className="underline text-customRed hover:text-customYellow">ICI</Link></li>
        </ul>

        <div className="flex flex-wrap w-4/5 py-10 mx-auto">
            {actualiteImage.map((data, index)=>(
                <div key={index} className="w-1/4 py-4 flex flex-col space-y-2 justify-between">
                    <Image src= {data.image} height='200' width='200' alt={data.title} />
                    <p className="text-customYellow underline text-lg">{data.title}</p>
                </div>
            ))}
        </div>

        {actualite.map((data, index)=>(
            <p className="text-customYellow text-justify pr-10" key={index}>{data}</p>
        ))}

        {actualite2.map((data, index)=>(
            <div key={index}>
                <p className="text-customYellow text-justify underline text-lg pt-4 pb-2">{data.title}</p>
                {data.data.map((i,index2)=>(
                    <p key={index2} className="text-customYellow text-justify pr-10">{i}</p>
                ))}
            </div>
        ))}

      </div>
    </div>
  )
}