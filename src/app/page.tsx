"use client"
import Image from "next/image";
import Link from 'next/link';
import { Sidebar, description } from "./data";
import Navbar from "./navbar";
import { useState } from 'react';
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
    navigator.clipboard.writeText('admin@ajoe.com');
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
          <p className="text-left text-lg font-semibold pb-12">Actualité octobre 2021</p>
          <p className="text-left text-xl pb-4">Des nouvelles de l&apos;AJOE... enfin!</p>
          { description.map((data, index)=>(
            <p key={index} className="text-customYellow tracking-wider">
              {data}
            </p>
          )) }
          
          <Image alt="alex Image" src="/alex.jpeg" width="180" height="270" className="border-0" />
          
          <p className="text-customYellow tracking-wider">
            Nous nous retrouverons donc tous ce soir là au Théatre &quot;Ranelagh&quot;, 5 rue
            des Vignes Paris 16&deg;.
          </p>
          
          <p className="text-customYellow tracking-wider pt-8">
            Micheline Abergel - Gaby Fossier Zein <br />
            Le 25 octobre 2021
          </p>
          <p className="text-right pt-20">mise à jour 25/10/21</p>
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
