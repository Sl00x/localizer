import { NextPage } from "next";
import { useState } from "react";
import { storeCollection } from "../utils/Store/Store";
import { FiFilePlus, FiList, FiUser } from "react-icons/fi";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center">
      <div className="flex gap-2text-indigo-600 text-4xl font-semibold">
        <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Localizer
        </span>
        <span className="text-gray-700 text-sm">Dashboard</span>
      </div>

      <div className="flex gap-4 my-10">
        <div
          onClick={() => router.push("/create")}
          className=" cursor-pointer transition-all delay-100 ease-in-out hover:bg-gray-900 p-6 border rounded-md border-gray-900  w-[250px] h-[250px] flex flex-col gap-2 justify-center items-center"
        >
          <FiFilePlus className="text-gray-700 text-6xl" />
          <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Create
          </span>
          <span className="text-gray-700 text-center">
            Créer une collection de langue.
          </span>
        </div>
        <div
          onClick={() => router.push("/collections")}
          className="cursor-pointer transition-all delay-100 ease-in-out hover:bg-gray-900 p-6 border rounded-md border-gray-900  w-[250px] h-[250px] flex flex-col gap-2 justify-center items-center"
        >
          <FiList className="text-gray-700 text-6xl" />
          <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Collections
          </span>
          <span className="text-gray-700 text-center">
            Gérer vos collections de langue.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;
