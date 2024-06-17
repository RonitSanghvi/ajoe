import Image from "next/image"
import Navbar from "../navbar"
import { gallery } from "../data"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "La Galerie"
}
export default function page() {
    return (
        <div>
            <Navbar image="/navbarImages/gallery.jpg"/>
            <div className="w-screen bg-white">
                <div className="flex flex-wrap py-10 mx-auto sm:w-4/5">
                    {gallery.map((data, index)=>(
                        <div key={index} className="w-full sm:w-1/2 md:w-1/4 items-center py-4 flex flex-col space-y-2 justify-between">
                            <Image src= {data.image}  height='200' width='200'  alt={data.image} className="w-60" />
                            <p className="text-customOrange underline text-xl hover:text-customYellow">{data.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}