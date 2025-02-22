import Logo from "@/img/logo-zedelievery.png";
import Image from "next/image";
export default function Navbar() {
 return (
  <div className="flex items-center justify-center w-full bg-yellow-400 text-slate-950 h-[95px]">
   <div className="flex w-2/3 h-3/4 justify-center items-center">
    <div className="flex justify-start items-center w-1/2 h-full">
     <Image src={Logo} alt="Logo Ze Delievery" className="w-1/6 h-full" />
    </div>
    <div className="flex justify-end items-center w-1/2 h-full p-1">
     <button className="rounded-xl w-1/4 uppercase font-bold text-md border border-slate-900 h-3/4">
      Entrar
     </button>
    </div>
   </div>
  </div>
 );
}
