import Navbar from "../navbar"
import Image from "next/image"
import { album } from "../data"

export default function page() {
    return (
    <div className="w-screen">
        <Navbar image="/navbarImages/album.jpg"/>
        <div className="flex flex-col min-h-screen bg-customRedMedium px-4 space-y-4 pt-6">
            <p className="text-2xl pb-4 tracking-widest">VOYAGE EN EGYPTE</p>
            <p className="text-customYellow">
                Benjamin Katane, jeune AJOEnaute de 21 ans, nous a adressé ce message :<br/>
                &quot;Je suis partit en Egypte pour les vacances de février et j&apos;ai pris quelques photos qui pourraient interesser la section photo du site Ajoe.<br/>
                La synagogue du caire : Ben Ezra , nous sommes aussi partis à Shaar Hashamyin mais les photos étaient interdites.<br/>
                des photos du caire et du quartier El Mouski dont nous sommes originaires.<br/>
                Salemly ala kol el gamaa&apos;iya.&quot;
            </p>
            <div className="flex flex-wrap w-4/5 py-10 mx-auto">
                {album.map((data, index)=>(
                    <Image src= {data} height='200' width='200' key={index} alt={data} className="w-1/3 pr-4 py-4" />
                ))}
            </div>
        
        </div>
    </div>
  )
}