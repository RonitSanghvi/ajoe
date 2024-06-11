import Image from "next/image"
import Navbar from "../navbar"
import { gallery } from "../data"

export default function page() {
    return (
        <div>
            <Navbar />
            <div className="w-screen bg-white">
                <div className="flex flex-wrap py-10 mx-auto w-4/5">
                    {gallery.map((data, index)=>(
                        <div key={index} className="w-1/4 py-4 flex flex-col space-y-2 justify-between">
                            <Image src= {data.image} height='200' width='200' alt={data.image} className="" />
                            <p className="text-customOrange underline text-xl hover:text-customYellow">{data.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}