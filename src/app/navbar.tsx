import Image from "next/image";
import Link from "next/link";

export default function Navbar({image}: {image: string}) {
    return (
        <div className="flex flex-col w-screen ">
            <div className="flex bg-white flex-row">
                <div className="p-1">
                    <Image alt="logo" src="/logo.jpg" className="w-12 h-12 sm:w-32 sm:h-32" width={122} height={104} />
                </div>
                <div className="flex flex-1 flex-col text-left sm:px-28 px-4 justify-center whitespace-nowrap" id="logo">
                    <span className="sm:text-2xl text-black tracking-widest font-bold">AJOE.ORG</span>
                    <text className="text-sm sm:text-base text-black tracking-widest"><text className="text-red-600 font-bold">A</text>ssociation des <text className="text-blue-600 font-bold">J</text>uifs <text className="text-blue-600 font-bold">O</text>riginaires d&apos;<text className="text-red-600 font-bold">E</text>gypte	</text>
                </div>
                <div className="p-0 flex">
                    <Image alt="image" src={image} width={122} height={122} className="hidden sm:block object-cover w-36 h-36" />
                </div>
            </div>
            <div className="border-b-2 border-customOrange"></div>
            <div className="border-b-2 border-customRed"></div>
            <div className="border-b-2 border-customOrange"></div>
            <Link href='/' className="tracking-widest text-sm bg-customRed text-customYellow hover:text-white hover:font-semibold py-1 pl-4">
                || ACCUEIL ||
            </Link>
            <div className="border-b-2 border-customOrange"></div>
            <div className="border-b-2 border-customRed"></div>
            <div className="border-b-2 border-customOrange"></div>
        </div>
  
    )   
}