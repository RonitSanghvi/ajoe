import Navbar from "../navbar"
import { cuisine } from "../data"
export default function page() {
  return (
    <div className="w-screen">
        <Navbar/>
        <div className="flex flex-col min-h-screen bg-customRedMedium px-4 space-y-4 pt-6 empty-dots">
            <p className="text-2xl pb-4 tracking-widest">Recette</p>
            <p className="font-semibold">MAYNA OU MINA : lasagnes de pain azyme<br/> POUR 6 à 8 PERSONNES</p>
            <ul className="pl-10">
                <li>10 à 15 galettes de pain azyme</li>
                <li>du poulet cuit au four ou à la cocotte ou du séfrito</li>
                <li>2 ou 3 oeufs selon grosseur</li>
                <li>de l&apos;huile</li>
                <li>un plat allant au four (carré ou rond ou long)</li>
            </ul>        
            {cuisine.map((data, index)=> (
                <p className="text-customYellow flex flex-col space-y-4 w-3/4 text-justify" key={index}>{data}</p>
            ))}
            <p>le plus de la recette : un plat qui permet d&apos;accomoder les restes de viande.</p>
            <div className="text-customYellow">
                <p>BON APPETIT !</p>
                <p>Joyce Rostein © (Mars 2009)</p>
            </div>
            <p className="text-customYellow">Nos recettes déjà publiées - <span className="text-customRed hover:text-customYellow underline">cliquer ici</span></p>
        </div>
    </div>
  )
}