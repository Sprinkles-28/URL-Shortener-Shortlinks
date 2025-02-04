import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Navbar from "@/components/Navbar";
 

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})

export default function Home() {
  return (
    <main>

      <div className=" h-[41.2rem] relative">
      <section className="grid grid-cols-2 h-full bg-gradient-to-r  from-red-300 from-10% via-red-200 via-30% to-yellow-100 to-50%">
        <div className=" flex flex-col gap-4  justify-center px-3 items-center text-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>
            The Best URL Shortner in the Market.
          </p>
          <p className="px-24 text-lg ">
            We are the most straightforward URL Shortner in the World. Most of the URL shortner will track you or ask you to give your details for login. We understand you needs and hence we have created this URL shotener
          </p>
          <div className='flex gap-6 justify-center items-center text-white mx-5 mt-5'>
          <Link href="/shorten"><button className='text-2xl bg-yellow-400 text-black rounded-full font-bold px-6 py-2 shadow-md shadow-red-600'>Try Now</button></Link>
        </div>
        </div>
        <div className=" flex justify-start relative">
          
           <Image alt="Image of a team"src={"/vector.png"} fill={true} className="mix-blend-darken"/>
          
        </div>

      </section>
      </div>
    </main>
  );
}
