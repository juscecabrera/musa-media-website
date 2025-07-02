import Image from "next/image";
import LogoTextMusaMedia from "@/assets/images/Logo Text Black.png"

export default function Home() {
  return (
   <div className="px-5 w-screen h-screen bg-black flex flex-col items-center justify-center gap-7">
      <Image 
        src={LogoTextMusaMedia}
        alt="logo text musa media"
      />
      <h1 className="text-white md:text-7xl text-6xl">Coming Soon</h1>
   </div>
  );
}
