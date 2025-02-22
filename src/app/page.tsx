import Banner from "@/img/banner.jpg";
import Image from "next/image";
import { FaLocationDot as Location } from "react-icons/fa6";

export default function Home() {
 return (
  <div className="flex flex-col min-h-screen">
   <div className="relative w-full h-[50vh]">
    <Image src={Banner} alt="Banner" className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-20 bg-black">
     <div className="flex flex-col justify-center items-center w-3/12 gap-5">
      <h1 className="p-3 uppercase text-center text-white text-4xl text-balance font-bold px-4 py-2 rounded">
       Bebida gelada em minutos
      </h1>
      <div className="w-full relative">
       <Location className="absolute left-4 top-1/2 transform -translate-y-1/2 z-3 text-gray-600" />
       <input
        type="text"
        className="rounded-2xl bg-slate-100 pl-12 p-3 w-full placeholder:text-gray-900 placeholder:font-semibold"
        placeholder="Inserir endereco para ver preco"
       />
      </div>
     </div>
    </div>
   </div>
   <div className="flex-1 w-full bg-gray-100 text-slate-950 p-8 space-y-6">
    <section className="bg-white p-6 shadow-lg rounded-lg">
     <h2 className="text-xl font-semibold">Seção 1</h2>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec velit
      at magna aliquet placerat.
     </p>
    </section>

    <section className="bg-white p-6 shadow-lg rounded-lg">
     <h2 className="text-xl font-semibold">Seção 2</h2>
     <p>
      Nullam tincidunt, elit nec facilisis tincidunt, eros nunc tincidunt erat,
      non egestas ligula mi in nisl.
     </p>
    </section>

    <section className="bg-white p-6 shadow-lg rounded-lg">
     <h2 className="text-xl font-semibold">Seção 3</h2>
     <p>
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum massa justo sit amet risus.
     </p>
    </section>
   </div>
  </div>
 );
}
