import { NextPage } from "next";
import { useState } from "react";
import {
  addLangageToList,
  initStoreCollection,
  storeCollection,
} from "../utils/Store/Store";
import { FiFilePlus, FiList, FiUser } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const Create: React.FC = () => {
  const [collection, setCollection] = useState("");
  const handleCreateCollection = () => {
    if (collection !== "") {
      initStoreCollection(collection);
      addLangageToList(collection);
    }
  };
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-10">
      <div className="flex gap-2text-indigo-600 text-4xl font-semibold">
        <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Common
        </span>
        <span className="text-gray-700 text-sm">Create</span>
      </div>
      <div className="w-full px-20 flex gap-4">
        <input
          value={collection}
          placeholder={"Nom de votre collection (ex: fr, en...)"}
          onChange={(e) => setCollection(e.target.value)}
          className="w-full px-4 py-2 border text-white uppercase border-gray-700 rounded-full outline-0 outline-none bg-white bg-opacity-0 transition-all delay-200 ease-in-out focus:bg-opacity-5 focus:outline-pink-500 focus:outline-2 outline-dashed"
        />
        <button
          onClick={() => handleCreateCollection()}
          className="w-[250px] px-4 flex items-center justify-center text-white rounded-full bg-gradient-to-tl from-pink-500 to-purple-600 transition-all delay-100 ease-in-out hover:from-purple-600 hover:to-pink-500"
        >
          Créer
        </button>
      </div>
      {collection.length >= 2 && (
        <div className="w-full justify-center items-center flex gap-2 px-20">
          <ReactCountryFlag countryCode={collection.toUpperCase()} />
          <span className="text-gray-600">Traduction vers {collection}</span>
        </div>
      )}
    </div>
  );
};
export default Create;
