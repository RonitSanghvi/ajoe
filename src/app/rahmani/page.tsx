import Navbar from "../navbar"
import { rahmani } from "../data"
import Image from "next/image"

export default function page() {
  return (
    <div className="w-screen text-customYellow">
      <Navbar image="/navbarImages/research.jpg"/>
      <div className="flex flex-col bg-customRedMedium px-4 space-y-4 py-6 empty-dots">
        <p className="text-2xl pb-4 tracking-widest">LECTURE: MOISE RAHMANI</p>
        <Image src="/tuchoisiraslerire.jpg" alt="Image of Book" width={150} height="100"/>
        <p className="font-semibold text-white">TU CHOISIRAS LE RIRE. (ed. Pascal)</p>
        {rahmani.map((data, index)=> (
            <p key={index} className=" text-justify pr-10">
                {data}
            </p>
        ))}
        <ul className="pl-8">
            <li>souhaiter à quelqu’un de perdre toute ses dents sauf une, afin qu’il ait une rage de dent.</li>
            <li>Souhaiter à quelqu’un d’avaler un parapluie et qu’il s’ouvre à l’intérieur</li>
        </ul>
        <p>
            En cette période où la cri se économique génère une morosité ambiante, « Tu choisiras le Rire » (un titre qui aurait bien pu être le 11ème commandement de D. à Moïse aux dires de l’auteur) est une recette garantie de bonne humeur et de rires pour tous ses lecteurs.<br/>
            A savourer lentement !<br/>
            David Harari (©D. Harari)
        </p>
      </div>
    </div>
  )
}