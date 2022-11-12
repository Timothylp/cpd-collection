import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import bg from "../public/images/astronaut-bg.png";
import LoginPage from "../components/app/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLogged } from "../utils/pocketbase";

const HomePage: NextPage = () => {
  const [passwordDisplay, setPasswordDisplay] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLogged()) {
      router.push("/app").then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <div className="bg-white" style={{ height: "100vh" }}></div>
  ) : (
    <div className="flex min-h-screen bg-black">
      <div className="relative w-1/2 p-4 text-center">
        <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 -translate-x-1/2  ">
          <h1 className="mb-20 font-mono text-6xl text-gray-200 antialiased">Cent Percent Delivery</h1>

          <div className="h-[300px]">
            {passwordDisplay ? (
              <LoginPage />
            ) : (
              <div
                onClick={() => setPasswordDisplay(true)}
                className="inline cursor-pointer rounded-lg border-2 border-gray-200 py-2 px-4 font-mono text-xl font-bold text-gray-200 hover:bg-gray-200 hover:text-black"
              >
                Commencer l'aventure
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Image src={bg} alt="Astronaute avec un tacos" className="h-screen rounded-bl-full" />
      </div>
    </div>
  );
};

export default HomePage;
