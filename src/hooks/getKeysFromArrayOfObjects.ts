import { FlexibleObjectTable } from './../types/types';


export const getKeysFromArrayOfObjects = (data: FlexibleObjectTable[]):string[] => {
    const keysSet = new Set<string>();
    data.forEach((item) => {
      Object.keys(item).forEach((key) => keysSet.add(key));
    });
    return Array.from(keysSet);
  };

