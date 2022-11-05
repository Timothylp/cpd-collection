import type { NextPage } from "next";
import Image from "next/image";
import bg from "../public/images/astronaut-bg.png";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center bg-black">
      <div className="relative w-1/2 p-4 text-center">
        <h1 className="mb-11 font-mono text-6xl text-gray-200 antialiased">Cent Percent Delivery</h1>
        <Link
          href="/login"
          className="rounded-lg border-2 border-gray-200 py-2 px-4 font-mono text-xl font-bold text-gray-200 hover:bg-gray-200 hover:text-black"
        >
          Commencer l'aventure
        </Link>
      </div>

      <div className="w-1/2">
        <Image src={bg} alt="Astronaute avec un tacos" className="h-screen rounded-bl-full" />
      </div>
    </div>
  );
};

export default HomePage;
