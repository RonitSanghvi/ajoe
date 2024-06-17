"use client"
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "./data";
import Navbar from "./navbar";
import { useState } from "react";
import useWindowSize from "./windowSize";

export default function Home() {

  const [copied, setCopied] = useState(false);  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLargeScreen = useWindowSize();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyEmail = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText("admin@ajoe.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-screen">
        
      <Navbar image = "/navbarImages/home.jpeg" />

      <div className="flex flex-col sm:flex-row bg-customStripes">
        <div className="flex flex-col tracking-widest space-y-3">
          <p className="block sm:hidden text-customRed border-t-2 border-b-2 border-customRed font-bold py-1 pl-4 mt-6 cursor-pointer text-xl active:text-customYellow" onClick={handleMenuToggle}>MENU</p>
          {(isMenuOpen || isLargeScreen) && (
          <div className="space-y-3">
            <Link href="/qui_sommes_nous" className="text-customRed font-bold pl-4 pr-8 pt-6 hover:scale-105">
              qui sommes nous ?
            </Link>
            
            {Sidebar.map((data, index)=> (
              <div key={index} className="">
                <div className="border-b-2 mb-3 border-customOrange"></div>
                <Link href={data.url} className=" text-customOrange pl-4 hover:text-customYellow hover:font-semibold">{data.title}</Link>
              </div>
            ))}

            <div className=" border-b-2 border-customOrange"></div>
            <Link href="" onClick={handleCopyEmail} className=" text-customOrange pl-4 hover:text-customYellow hover:font-semibold">CONTACT</Link>
            {copied && <p className="pl-4 text-customOrange transition duration-300 ease-in-out">Email copied!</p>}
          </div>)}
        </div>

        <div className="flex-1 px-4 sm:px-16 py-12 flex flex-col space-y-4 text-justify">
          <Image alt="alex Image" src="/alex.jpeg" width="180" height="270" className="border-0" />
          <p className="text-left text-xl pb-4">Des nouvelles de l&apos;AJOE... enfin!</p>
          <p className="text-left text-xl pb-4">Chers amis de l&apos;AJOE,</p>
          <p className="text-customYellow tracking-wider">
            Ces deux dernières années ont été comme pour tout le monde une période très difficile pour notre association et a vu disparaître beaucoup de nos très chers amis. C&apos;est ainsi que David HARARI s&apos;en est allé en plein confinement le 7 avril 2020. L&apos;AJOE perd encore une fois un membre très actif, bien plus qu&apos;un trésorier, un très grand ami et nous lui rendons hommage. Il nous manque terriblement.
          </p>
          <p className="text-customYellow tracking-wider">
            Cependant, pour toute une nouvelle génération qui arrive, notre histoire se doit d&apos;être transmise. C&apos;est pourquoi nous avons décidé de programmer et de produire, pour une soirée exceptionnelle le 15 décembre prochain, le spectacle d&apos;Isabelle de Botton &apos;La Parisienne d&apos;Alexandrie&apos; qui retrace avec tant de justesse, tendresse et humour l&apos;épopée des Juifs d&apos;Égypte.  
          </p>
          <p className="text-customYellow tracking-wider">
            En plus de cela, nous avons trouvé de généreux contributeurs et entrepreneurs - <Link className="underline hover:text-customRed text-customOrange" href="https://www.jdc.org/">JDC</Link> et <Link className="underline hover:text-customRed text-customOrange" href="https://aiforeveryone.org/">AiForEveryone</Link> - pour soutenir notre cause via des dons économiques et techniques, afin d&apos;assurer que notre projet non seulement perdure, mais se développe encore davantage au sein de la communauté juive d&apos;Égypte. Leur générosité et leur engagement sont une véritable source d&apos;inspiration pour nous tous.  
          </p>
          <p className="text-customYellow tracking-wider">
          Nous espérons vous voir nombreux lors de cette soirée mémorable, pour célébrer notre histoire commune et rendre hommage à ceux qui nous ont quittés. Ensemble, nous continuerons à faire vivre l&apos;esprit et les valeurs de l&apos;AJOE.  
          </p>

          <p className="text-left text-xl">Avec toute notre amitié,</p>
          <p className="text-left text-xl">L&quot;équipe de l&quot;AJOE</p>
          
        </div>

        <div className="flex flex-col bg-yellow-100 text-black items-center space-y-4 text-center w-full sm:w-60 p-4">
          <text className="text-lg font-bold py-2 text-customRed">A LIRE</text>
          <div>
            <Image
              src="/trigano_book.jpg"
              alt="product image 2"
              width="176"
              height="260"
              className="border mx-auto"
            />
            <span className="block">La fin du judaïsme en terre d&apos;Islam</span>
            <Link href="/actualite" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </Link>
          </div>

          <div>
            <Image
              src="/orosdi-backsaga.jpg"
              alt="product image 1"
              width="172"
              height="246"
              className="border-0 mt-8 mx-auto"
            />
            <span className="block">Les Grands Magasins du Caire</span>
            <Link href="/history" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </Link>
          </div>

          <div>
            <Image
              src="/tuchoisiraslerire.jpg"
              alt="product image 2"
              width="178"
              height="240"
              className="border mt-8 mx-auto"
            />
            <span className="block">Tu choisiras le rire</span>
            <Link href="/rahmani" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </Link>
          </div>

          <div>
            <span className="block">Conférence de Bat Yam</span>
            <Link href="/PDFs/conference_batyam.pdf" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </Link>
          </div>

          <div>
            <span className="block"> Les fleurs de l&apos;orient et l&apos;occident </span>
            <Link href="/PDFs/farhi_fleurs.pdf" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </Link>
          </div>

          <div>
            <span className="block"> Le livre mémoire de Roland Bertin </span>
            <span className="block">&quot;Once apon a time&quot;</span>
            <Link href="/PDFs/kanyamakan42.pdf" className="text-customRed underline hover:text-customOrange"> KAN YA MAKAN </Link>
          </div>

          <div>
            <span className="block">Conférence Alexandre De Aranjo</span>
            <Link href="/PDFs/aranjo_de.pdf" className="text-customRed underline hover:text-customOrange"> le texte intégral </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
