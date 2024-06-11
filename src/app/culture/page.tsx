import Navbar from "../navbar"
export default function page() {
  return (
    <div className="w-screen">
      <Navbar/>
      <div className="flex flex-col min-h-screen bg-customRedMedium px-4 space-y-4 pt-6">
        <p className="text-2xl pb-4 tracking-widest">Culture</p>
        <p className="text-customYellow">Un livre à télécharger :</p>
        <p className="font-semibold">Once apon a time,<br/> KAN YA MAKAN</p>
        <p className="w-2/4">L&apos;histoire de mon Egypte à travers la saga de deux familles juives sépharades installées en Egypte vers la fin du XIXe siècle et les multiples évolutions sociales et politiques de ce pays pendant les deux premiers tiers du XXe....</p>
        <p className="w-2/4 text-right">Roland Bertin</p>
        <p className="w-2/4 text-right text-customYellow">lire la suite -<span className="underline text-customRed hover:text-customYellow">télécharger ici</span></p>
      </div>
    </div>
  )
}