import Link from "next/link";
import Navbar from "../navbar";

export default function page() {
    return (
        <>
            <Navbar image= "/navbarImages/qui_sommes_nous.jpg" />
            <div className="flex flex-col w-screen bg-customRedMedium px-4 py-4 space-y-6">
                <p className="text-left text-xl pb-4 tracking-widest pt-6">QUI SOMMES NOUS ?</p>
                <p className="text-customYellow tracking-wider">
                    Depuis le 1er mars 2000 l&apos;ASSOCIATION DES JUIFS ORIGINAIRES D&apos;EGYPTE : l&apos;AJOE
                </p>
                <Link href="/" className="text-customRed underline tracking-wider">
                    www.ajoe.org
                </Link>
                <p className="text-customYellow tracking-wider">
                    poursuit les objectifs suivants :
                </p>
                <div className="text-customYellow tracking-wider text-justify pl-12 empty-dots">
                    <ul className="space-y-4">
                        <li>
                            Perpétuer l&apos;apport culturel spécifique de la communauté des Juifs originaires d&apos;Egypte qui se caractérise par l&apos;esprit de tolérance et d&apos;ouverture,
                        </li>
                        <li>
                            Perpétuer et promouvoir la richesse de l&apos;histoire multiséculaire de la présence juive en Egypte et plus particulièrement l&apos;apport exceptionnel de cette communauté au développement de ce pays au 19ème et au 20ème siècles en utilisant pour cela les moyens modernes de communication,
                        </li>
                        <li>
                            Renforcer les liens entre les communautés juives originaires d&apos;Egypte dispersées à travers le monde,
                        </li>
                        <li>
                            Renforcer les liens d&apos;amitié entre les Juifs originaires d&apos;Egypte et les diverses composantes de la Société Egyptienne.
                        </li>

                    </ul>
                </div>



            </div>
        </>
    )
}
