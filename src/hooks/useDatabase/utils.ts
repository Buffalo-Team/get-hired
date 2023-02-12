import { Application, Collection, ModelBase } from '~/@types/common';
import { DBModelBase } from '~/@types/database';

export const mapEntry = <MODEL extends ModelBase, DB_MODEL extends DBModelBase>(
  collection: Collection,
  entry: DB_MODEL,
): MODEL => {
  const mappedBase = {
    ...entry,
    createdAt: new Date(entry.createdAt),
    updatedAt: entry.updatedAt ? new Date(entry.updatedAt) : entry.updatedAt,
  } as MODEL;

  if (collection === Collection.Applications) {
    const application = mappedBase as unknown as Application;

    return {
      ...application,
      applicationDate: new Date(application.applicationDate),
    } as unknown as MODEL;
  } else {
    return mappedBase;
  }
};
