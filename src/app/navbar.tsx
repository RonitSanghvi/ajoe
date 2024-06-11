import Image from "next/image";

export default function Navbar(image: any) {
    return (
        <div className="flex flex-col w-screen">
            <div className="flex bg-white flex-row">
                <div className="p-1">
                    <Image alt="logo" src="/logo.jpg" width="122" height="104" />
                </div>
                <div className="flex flex-1 flex-col text-left px-28 justify-center whitespace-nowrap" id="logo">
                    <span className="text-2xl text-black tracking-widest font-bold">AJOE.ORG</span>
                    <text className="text-black tracking-widest"><text className="text-red-600 font-bold">A</text>ssociation des <text className="text-blue-600 font-bold">J</text>uifs <text className="text-blue-600 font-bold">O</text>riginaires d&apos;<text className="text-red-600 font-bold">E</text>gypte	</text>
                </div>
                <div className="p-0 pr-2 h-104 flex">
                    <Image alt={image} src={image} width="122" height="104" className="object-cover" />
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
        </div>
  
    )   
}