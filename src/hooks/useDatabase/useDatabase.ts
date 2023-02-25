import { Collection, Application, ModelBase, Status } from '~/@types/common';
import { DBApplication, DBModelBase } from '~/@types/database';
import { mapEntry } from './useDatabase.utils';

type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;

const FREE_ID_KEY = 'free-id';

const useDatabase = () => {
  const get = <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
    collection: Collection,
    filterFunction?: (entry: MODEL) => boolean,
  ): Promise<MODEL[]> => {
    const bareLocalStorageValue = localStorage.getItem(collection);
    const entries: DB_MODEL[] = bareLocalStorageValue ? JSON.parse(bareLocalStorageValue) : [];

    const mappedEntries = entries.map((entry) => mapEntry<MODEL, DB_MODEL>(collection, entry));

    return Promise.resolve(filterFunction ? mappedEntries.filter(filterFunction) : mappedEntries);
  };

  const getById = async <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
    collection: Collection,
    id: number,
  ): Promise<MODEL | null> => {
    const entries = await get<MODEL, DB_MODEL>(collection);

    return Promise.resolve(entries.find((entry) => entry.id === id) ?? null);
  };

  const insert = async <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
    collection: Collection,
    payload: Omit<MODEL, keyof ModelBase>,
  ): Promise<Status> => {
    const freeID = Number(localStorage.getItem(FREE_ID_KEY) || 1);
    const payloadToInsert = { ...payload, id: freeID, createdAt: new Date() } as MODEL;

    const entries = await get<MODEL, DB_MODEL>(collection);

    if (entries.length === 0) {
      localStorage.setItem(collection, JSON.stringify([payloadToInsert]));
    } else {
      entries.push(payloadToInsert);
      localStorage.setItem(collection, JSON.stringify(entries));
    }

    localStorage.setItem(FREE_ID_KEY, `${freeID + 1}`);

    return Promise.resolve(Status.Success);
  };

  const removeById = async <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
    collection: Collection,
    id: number,
  ): Promise<Status> => {
    const entries = await get<MODEL, DB_MODEL>(collection);
    const newEntries = entries.filter((entry) => entry.id !== id);

    localStorage.setItem(collection, JSON.stringify(newEntries));

    return Promise.resolve(Status.Success);
  };

  const updateById = async <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
    collection: Collection,
    id: number,
    payload: Partial<Omit<MODEL, keyof ModelBase>>,
  ): Promise<MODEL> => {
    const entries = await get<MODEL, DB_MODEL>(collection);
    const index = entries.findIndex((entry) => entry.id === id);
    entries[index] = { ...entries[index], ...payload, updatedAt: new Date() };

    localStorage.setItem(collection, JSON.stringify(entries));

    return Promise.resolve(entries[index]);
  };

  const dropDatabase = () => {
    localStorage.removeItem(Collection.Applications);
    localStorage.removeItem(FREE_ID_KEY);

    return Status.Success;
  };

  return {
    [Collection.Applications]: {
      get: (...args: DropFirst<Parameters<typeof get<Application, DBApplication>>>) =>
        get<Application, DBApplication>(Collection.Applications, ...args),
      getById: (...args: DropFirst<Parameters<typeof getById<Application, DBApplication>>>) =>
        getById<Application, DBApplication>(Collection.Applications, ...args),
      insert: (...args: DropFirst<Parameters<typeof insert<Application, DBApplication>>>) =>
        insert<Application, DBApplication>(Collection.Applications, ...args),
      removeById: (...args: DropFirst<Parameters<typeof removeById<Application, DBApplication>>>) =>
        removeById<Application, DBApplication>(Collection.Applications, ...args),
      updateById: (...args: DropFirst<Parameters<typeof updateById<Application, DBApplication>>>) =>
        updateById<Application, DBApplication>(Collection.Applications, ...args),
    },
    dropDatabase,
  };
};

export default useDatabase;
