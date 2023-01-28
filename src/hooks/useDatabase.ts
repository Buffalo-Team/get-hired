import { Collection, IApplication, IModelBase, Status } from "~/@types/common";

// taken from https://stackoverflow.com/a/63029283
type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;

const FREE_ID_KEY = 'free-id';

const useDatabase = () => {
  const get = <T extends IModelBase>(
    collection: Collection,
    filterFunction?: (entry: T) => boolean,
  ): T[] => {
    const entries: T[] = JSON.parse(localStorage.getItem(collection) || '[]');

    return filterFunction ? entries.filter(filterFunction) : entries;
  };

  const getById = <T extends IModelBase>(collection: Collection, id: number): T | null => {
    const entries = get<T>(collection);

    return entries.find((entry) => entry.id === id) || null;
  };

  const insert = <T extends IModelBase>(
    collection: Collection,
    payload: Omit<T, keyof IModelBase>,
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

  const removeById = <T extends IModelBase>(collection: Collection, id: number): Status => {
    const entries = get<T>(collection);
    const newEntries = entries.filter((entry) => entry.id !== id);

    localStorage.setItem(collection, JSON.stringify(newEntries));

    return Status.Success;
  };

  const updateById = <T extends IModelBase>(collection: Collection, id: number, payload: Partial<Omit<T, keyof IModelBase>>): T => {
    const entries = get<T>(collection);
    const index = entries.findIndex((entry) => entry.id === id);
    entries[index] = { ...entries[index], ...payload, updatedAt: new Date() };

    localStorage.setItem(collection, JSON.stringify(entries));

    return entries[index];
  };

  return {
    [Collection.Applications]: {
      get: (...args: DropFirst<Parameters<typeof get>>) =>
        get<IApplication>(Collection.Applications, ...args),
      getById: (...args: DropFirst<Parameters<typeof getById>>) =>
        getById<IApplication>(Collection.Applications, ...args),
      // eslint-disable-next-line prettier/prettier
      insert: (...args: DropFirst<Parameters<typeof insert<IApplication>>>) =>
        insert<IApplication>(Collection.Applications, ...args),
      removeById: (...args: DropFirst<Parameters<typeof removeById>>) =>
        removeById<IApplication>(Collection.Applications, ...args),
      updateById: (...args: DropFirst<Parameters<typeof updateById<IApplication>>>) =>
        updateById<IApplication>(Collection.Applications, ...args),
    },
  };
};

export default useDatabase;