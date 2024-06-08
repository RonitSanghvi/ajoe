import Image from "next/image";
import { Sidebar, description } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col">
        
      <div className="flex bg-white flex-row">
        <div className="p-1">
          <Image alt="logo" src="/logo.jpg" width="122" height="104" />
        </div>
        <div className="flex flex-1 flex-col text-left px-28 justify-center whitespace-nowrap" id="logo">
          <span className="text-2xl text-black tracking-widest font-bold">AJOE.ORG</span>
          <text className="text-black tracking-widest"><text className="text-red-600 font-bold">A</text>ssociation des <text className="text-blue-600 font-bold">J</text>uifs <text className="text-blue-600 font-bold">O</text>riginaires d&apos;<text className="text-red-600 font-bold">E</text>gypte	</text>
        </div>
        <div className="p-0 pr-2 h-104 flex">
          <Image alt="carte_web" src="/carte_web.jpeg" width="122" height="104" className="object-cover" />
        </div>
      </div>

      <div className="border-b-2 border-customOrange"></div>
      <div className="border-b-2 border-customRed"></div>
      <div className="border-b-2 border-customOrange"></div>
      <div className="border-b-8 border-customRed"></div>
      <div className="border-b-8 border-customRed"></div>
      <div className="border-b-8 border-customRed"></div>
      <div className="border-b-2 border-customOrange"></div>
      <div className="border-b-2 border-customRed"></div>
      <div className="border-b-2 border-customOrange"></div>

      <div className="flex flex-row bg-customStripes">
        <div className="flex flex-col tracking-widest space-y-3">
          <a href="" className="text-customRed font-bold pl-4 pr-8 pt-6 hover:scale-105">
            qui sommes nous ?
          </a>
          
          {Sidebar.map((data, index)=> (
            <>
              <div className="border-b-2 border-customOrange"></div>
              <a href="" className=" text-customOrange pl-4 hover:text-customYellow hover:font-semibold" key={index}>{data}</a>
            </>
          ))}
        </div>

        <div className="flex-1 px-16 py-12 flex flex-col space-y-4 text-justify">
          <p className="text-left text-lg font-semibold pb-12">Actualité octobre 2021</p>
          <p className="text-left text-xl pb-4">Des nouvelles de l&apos;AJOE... enfin!</p>
          { description.map((data, index)=>(
            <p key={index} className="text-customYellow tracking-wider">
              {data}
            </p>
          )) }
          <a href="">
            <Image alt="alex Image" src="/alex.jpeg" width="180" height="270" className="border-0" />
          </a>
          <p className="text-customYellow tracking-wider">
            Nous nous retrouverons donc tous ce soir là au Théatre &quot;Ranelagh&quot;, 5 rue
            des Vignes Paris 16&deg;.
          </p>
          <p className="text-customYellow tracking-wider">
            Vous pouvez d&apos;ores et déjà réserver vos places sur le site{' '}
            <a href="" title="Billetreduc" className="text-customRed underline hover:text-customOrange">
              Billetreduc.com
            </a>
            {' '}ou auprès du 06 59 00 05 05
          </p>
          <p className="text-customYellow tracking-wider pt-8">
            Micheline Abergel - Gaby Fossier Zein <br />
            Le 25 octobre 2021
          </p>
          <p className="text-right pt-20">mise à jour 25/10/21</p>
        </div>

        <div className="flex flex-col bg-yellow-100 text-black p-2 items-center space-y-4 text-center w-60 px-4">
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
            <a href="actualite.html" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </a>
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
            <a href="livre1_0908.html" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </a>
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
            <a href="" className="text-customRed underline hover:text-customOrange">
              lire la suite &gt;
            </a>
          </div>

          <div>
          <span className="block">Conférence de Bat Yam</span>
          <a href="" className="text-customRed underline hover:text-customOrange">
            lire la suite &gt;
          </a>
          </div>

          <div>
          <span className="block"> Les fleurs de l&apos;orient et l&apos;occident </span>
          <a href="" className="text-customRed underline hover:text-customOrange">
            lire la suite &gt;
          </a>
          </div>

          <div>
          <span className="block"> Le livre mémoire de Roland Bertin </span>
          <span className="block">&quot;Once apon a time&quot;</span>
          <a href="" className="text-customRed underline hover:text-customOrange"> KAN YA MAKAN </a>
          </div>

          <div>
          <span className="block">Conférence Alexandre De Aranjo</span>
          <a href="" className="text-customRed underline hover:text-customOrange"> le texte intégral </a>
          </div>

        </div>
      </div>
    </div>
  );
}
