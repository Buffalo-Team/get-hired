import { Collection, Application, ModelBase, Status } from "~/@types/common";

type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;

const FREE_ID_KEY = 'free-id';

const useDatabase = () => {
  const get = <T extends ModelBase>(
    collection: Collection,
    filterFunction?: (entry: T) => boolean,
  ): T[] => {
    const bareLocalStorageValue = localStorage.getItem(collection);
    const entries: T[] = bareLocalStorageValue ? JSON.parse(bareLocalStorageValue) : [];

    return filterFunction ? entries.filter(filterFunction) : entries;
  };

  const getById = <T extends ModelBase>(collection: Collection, id: number): T | null => {
    const entries = get<T>(collection);

    return entries.find((entry) => entry.id === id) ?? null;
  };

  const insert = <T extends ModelBase>(
    collection: Collection,
    payload: Omit<T, keyof ModelBase>,
  ): Status => {
    const freeID = Number(localStorage.getItem(FREE_ID_KEY) || 1);
    const payloadToInsert = { ...payload, id: freeID, createdAt: new Date() } as T;

    const entries = get<T>(collection);

    if (entries.length === 0) {
      localStorage.setItem(collection, JSON.stringify([payloadToInsert]));
    } else {
      entries.push(payloadToInsert);
      localStorage.setItem(collection, JSON.stringify(entries));
    }

    localStorage.setItem(FREE_ID_KEY, `${freeID + 1}`);

    return Status.Success;
  };

  const removeById = <T extends ModelBase>(collection: Collection, id: number): Status => {
    const entries = get<T>(collection);
    const newEntries = entries.filter((entry) => entry.id !== id);

    localStorage.setItem(collection, JSON.stringify(newEntries));

    return Status.Success;
  };

  const updateById = <T extends ModelBase>(collection: Collection, id: number, payload: Partial<Omit<T, keyof ModelBase>>): T => {
    const entries = get<T>(collection);
    const index = entries.findIndex((entry) => entry.id === id);
    entries[index] = { ...entries[index], ...payload, updatedAt: new Date() };

    localStorage.setItem(collection, JSON.stringify(entries));

    return entries[index];
  };

  return {
    [Collection.Applications]: {
      // eslint-disable-next-line prettier/prettier
      get: (...args: DropFirst<Parameters<typeof get<Application>>>) =>
        get<Application>(Collection.Applications, ...args),
      getById: (...args: DropFirst<Parameters<typeof getById<Application>>>) =>
        getById<Application>(Collection.Applications, ...args),
      insert: (...args: DropFirst<Parameters<typeof insert<Application>>>) =>
        insert<Application>(Collection.Applications, ...args),
      removeById: (...args: DropFirst<Parameters<typeof removeById<Application>>>) =>
        removeById<Application>(Collection.Applications, ...args),
      updateById: (...args: DropFirst<Parameters<typeof updateById<Application>>>) =>
        updateById<Application>(Collection.Applications, ...args),
    },
  };
};

export default useDatabase;
