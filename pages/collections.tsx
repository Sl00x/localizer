import { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  addToStore,
  commonKeysStruct,
  getAllCommons,
  getAllLangs,
  getCollection,
  storeCollection,
} from "../utils/Store/Store";
import { FiFilePlus, FiList, FiUser } from "react-icons/fi";
import {
  collapseTextChangeRangesAcrossMultipleVersions,
  ObjectFlags,
} from "typescript";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";
import ReactJson from "react-json-view";
import { ModalPreview } from "../components/ModalPreview/ModalPreview";

const Collections: React.FC = () => {
  const [collections, setCollections] = useState<any | null | undefined>();
  const [langs, setLangs] = useState<any>();
  const [currentLang, setCurrentLang] = useState<any>();
  const [currentKey, setCurrentKey] = useState<any>();
  const [currentValue, setCurrentValue] = useState<any>();
  const router = useRouter();
  const [onShowpreview, setOnShowPreview] = useState(false);

  useEffect(() => {
    setCollections(commonKeysStruct());
    setLangs(getAllLangs());
    console.log(commonKeysStruct());
  }, []);

  const handleAddKey = () => {
    addToStore(currentLang, currentKey, currentValue);
    setCollections(commonKeysStruct());
  };

  const visualize = () => {
    setOnShowPreview(true);
  };
  return (
    <div className="relative h-screen w-screen bg-black flex flex-col items-center justify-center">
      <ModalPreview
        collection={currentLang}
        isOpen={onShowpreview}
        onClose={() => setOnShowPreview(false)}
      />
      <div className="flex gap-2text-indigo-600 text-4xl font-semibold">
        <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Common
        </span>
        <span className="text-gray-700 text-sm">Collections</span>
      </div>
      <div className="flex gap-2 items-center">
        <select
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          className="w-full px-4 apparence-none py-2 border text-white uppercase border-gray-700 rounded-full outline-0 outline-none bg-white bg-opacity-0 transition-all delay-200 ease-in-out focus:bg-opacity-5 focus:outline-pink-500 focus:outline-2 outline-dashed"
        >
          {langs &&
            langs.map((lang: string) => (
              <option value={lang}>
                {" "}
                <ReactCountryFlag countryCode={lang.toUpperCase()} /> {lang}
              </option>
            ))}
        </select>
        <input
          value={currentKey}
          onChange={(e) => setCurrentKey(e.target.value)}
          placeholder={"Clé d'affichage"}
          className="w-full px-4 py-2 border text-white uppercase border-gray-700 rounded-full outline-0 outline-none bg-white bg-opacity-0 transition-all delay-200 ease-in-out focus:bg-opacity-5 focus:outline-pink-500 focus:outline-2 outline-dashed"
        />
        <input
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          placeholder={"Valeur"}
          className="w-full px-4 py-2 border text-white uppercase border-gray-700 rounded-full outline-0 outline-none bg-white bg-opacity-0 transition-all delay-200 ease-in-out focus:bg-opacity-5 focus:outline-pink-500 focus:outline-2 outline-dashed"
        />
        <button
          onClick={() => handleAddKey()}
          className="w-[250px] py-2 px-4 flex items-center justify-center text-white rounded-full bg-gradient-to-tl from-pink-500 to-purple-600 transition-all delay-100 ease-in-out hover:from-purple-600 hover:to-pink-500"
        >
          Ajouter
        </button>
        <button
          onClick={() => visualize()}
          className="w-[250px] py-2 px-4 flex items-center justify-center text-white rounded-full bg-gradient-to-tl from-pink-500 to-purple-600 transition-all delay-100 ease-in-out hover:from-purple-600 hover:to-pink-500"
        >
          Visualiser
        </button>
        <button
          onClick={() => router.push("/create")}
          className="w-full py-2 px-4 flex items-center justify-center text-white rounded-full bg-gradient-to-tl from-pink-500 to-purple-600 transition-all delay-100 ease-in-out hover:from-purple-600 hover:to-pink-500"
        >
          Créer une collection
        </button>
      </div>
      <div className="flex flex-col w-full px-20">
        {collections &&
          Object.keys(collections).map((collection) => (
            <>
              <span className="text-white text-xl font-semibold my-2">
                {collection}
              </span>
              <hr className="opacity-10" />
              <div className="flex flex-col my-4">
                {collections &&
                  Object.entries(collections[collection]).map(
                    ([key, value], index) => (
                      <div className="w-full flex justify-between items-center">
                        <div className="text-white uppercase flex gap-2 items-center">
                          <ReactCountryFlag countryCode={key.toUpperCase()} />
                          {key}
                        </div>
                        <span className="text-white">
                          <>
                            {value ? (
                              value
                            ) : (
                              <b className="text-red-400">Pas définie</b>
                            )}
                          </>
                        </span>
                      </div>
                    )
                  )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};
export default Collections;
