import Navbar from "../navbar"
import { exit } from "../data"
import Image from "next/image"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sortie D'Egtpte"
}
export default function page() {
  return (
    <div className="w-screen">
        <Navbar image="/navbarImages/testimonies.jpg"/>
        <div className="flex flex-col min-h-screen bg-customRedMedium px-4 space-y-4 py-6">
            <p className="text-2xl pb-4 tracking-widest">VOTRE SORTIE D&apos;EGYPTE</p>
            <p className="text-customYellow">
                Cette nouvelle rubrique reçoit vos témoignages concernant la sortie d&apos;Egypte des années 48 aux années 60 :<br/><br/>

                Vous (ou vos parents) êtes partis en avion, en bateau, vous avez dû tout abandonner, vous avez quitté le pays avec un passeport apatride, une feuille de route (aller sans retour),<br/>
                L&apos;AJOE a besoin de vos témoignages, de photos, de documents. Nous préparons un dossier spécial &quot;Sortie d&apos;Egypte&quot;.<br/>
                Adressez nous les documents numérisés, si vous ne pouvez les numériser, vous pouvez nous les confier, ils vous seront restitués.<br/>
                Nous comptons sur la collaboration de chacun des Juifs Originaires d&apos;Egypte, vivant en France ou à l&apos;Etranger.
            </p>
            <div className="text-customRed border-b border-white font-semibold text-lg tracking-widest">Première contribution de la famille FRENKEL.</div>
            <p className="text-customYellow"> Didier Frenkel nous a confié les feuilles de route des membres de sa famille, établies par le Ministère de l&apos;Intérieur, portant la mention : </p>
            <p className="">&quot;Feuille de Route Valable pour un seul Voyage et sans Retour&quot;.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-10 py-10 mx-auto items-center">
                {exit.map((data, index)=>(
                    <div key={index} className="sm:w-1/4 py-4 flex flex-col space-y-2 justify-between">
                        <Image src= {data.image} height='100' width='100' alt={data.image} className="w-32 self-center" />
                        <p className="text-customOrange underline text-md hover:text-customYellow">{data.name}</p>
                    </div>
                ))}
            </div>
            <div className="text-customRed border-b border-white font-semibold text-lg tracking-widest">Départ d&apos;Alexandrie.</div>
            <p className="text-customYellow"> <span className="font-bold">AEOLIA</span> : J&apos;etais sur ce bateau qui a quitté Alexandrie pou le Pirée, Genes et Marseille avec mes soeurs, ma mère et mon père ainsi que ma grandmère et une tante.La famille Sidi est maintenant aux USA moi même. Ma mère et ma soeur sont à Haifa Une de mes soeurs et mon père sont décédés. <br/>Sylvain Sidi  Medecin a Tucson Arizona -0908</p>
        </div>
    </div>
  )
}