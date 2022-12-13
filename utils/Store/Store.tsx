export enum TypeOfWindow {
  UNDEFINED = "undefined",
}

export const COMMON_TRANSLATION_KEY = "common";
export const LANGAGE_LIST_KEY = "langs";

export const addLangageToList = (key: string) => {
  if (typeof window !== TypeOfWindow.UNDEFINED) {
    const currentCollection = localStorage.getItem(LANGAGE_LIST_KEY);
    if (currentCollection) {
      const langs = JSON.parse(currentCollection);
      langs.push(key);
      localStorage.setItem(LANGAGE_LIST_KEY, JSON.stringify(langs));
    } else {
      const langs = [];
      langs.push(key);
      localStorage.setItem(LANGAGE_LIST_KEY, JSON.stringify(langs));
    }
  }
};

export const storeCollection = (name: string, data: any) => {
  if (typeof window !== TypeOfWindow.UNDEFINED) {
    const currentCollection = localStorage.getItem(COMMON_TRANSLATION_KEY);
    const storeState: any = currentCollection
      ? JSON.parse(currentCollection)
      : {};
    storeState[name] = data;
    localStorage.setItem(COMMON_TRANSLATION_KEY, JSON.stringify(storeState));
  }
};

export const initStoreCollection = (name: string) => {
  if (typeof window !== TypeOfWindow.UNDEFINED) {
    const currentCollection = localStorage.getItem(COMMON_TRANSLATION_KEY);
    const storeState: any = currentCollection
      ? JSON.parse(currentCollection)
      : {};
    localStorage.setItem(COMMON_TRANSLATION_KEY, JSON.stringify(storeState));
  }
};

export const addToStore = (collection: string, key: string, value: string) => {
  if (typeof window !== TypeOfWindow.UNDEFINED) {
    const currentCollection = localStorage.getItem(COMMON_TRANSLATION_KEY);
    const storeState: any = currentCollection
      ? JSON.parse(currentCollection)
      : {};
    if (storeState[collection]) storeState[collection][key] = value;
    else storeState[collection] = { ...{ [key]: value } };
    localStorage.setItem(COMMON_TRANSLATION_KEY, JSON.stringify(storeState));
  }
};

export const updateStoreCollection = (name: string, data: any) => {
  if (
    typeof window !== TypeOfWindow.UNDEFINED &&
    localStorage.getItem(COMMON_TRANSLATION_KEY) !== null
  ) {
    const storeState: any = JSON.parse(
      localStorage.getItem(COMMON_TRANSLATION_KEY) as string
    );

    storeState[name] = data;
    localStorage.setItem(
      COMMON_TRANSLATION_KEY,
      JSON.stringify(storeCollection)
    );
  }
};

export const getAllCommons = () => {
  if (
    typeof window !== TypeOfWindow.UNDEFINED &&
    localStorage.getItem(COMMON_TRANSLATION_KEY) !== null
  ) {
    return JSON.parse(localStorage.getItem(COMMON_TRANSLATION_KEY) as string);
  }
  return undefined;
};

export const getAllLangs = () => {
  if (
    typeof window !== TypeOfWindow.UNDEFINED &&
    localStorage.getItem(LANGAGE_LIST_KEY) !== null
  ) {
    return JSON.parse(localStorage.getItem(LANGAGE_LIST_KEY) as string);
  }
  return undefined;
};

export const commonKeysStruct = () => {
  const collections = getAllCommons();

  const collection = {
    fr: { hello: "bonjour" },
    en: { hello: "hello" },
    it: { welcom: "bienvenido" },
  };

  const result = {
    hello: { en: "hello", fr: "bonjour", it: undefined },
    welcom: { en: undefined, fr: undefined, it: "bienvenido" },
  };

  const datas: any = {};
  const langs = getAllLangs();
  for (const lang of langs) {
    for (const [collectionKey, collectionValue] of Object.entries(
      collections
    )) {
      for (const [key, value] of Object.entries(collectionValue)) {
        if (!Object.keys(datas).includes(key)) datas[key] = {};
        if (collectionKey === lang) {
          datas[key][lang] = value;
        }
        if (!datas[key][lang]) {
          datas[key][lang] = undefined;
        }
      }
    }
  }

  return datas;
};

export const getCollection = (name: string) => {
  if (
    typeof window !== TypeOfWindow.UNDEFINED &&
    localStorage.getItem(COMMON_TRANSLATION_KEY) !== null
  ) {
    const data = JSON.parse(
      localStorage.getItem(COMMON_TRANSLATION_KEY) as string
    );
    return data[name];
  }
  return undefined;
};
