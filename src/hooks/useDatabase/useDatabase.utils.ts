import { Application, Collection, ModelBase } from '~/@types/common';
import { DBModelBase } from '~/@types/database';

export const mapEntry = <Model extends ModelBase, DBModel extends DBModelBase>(
  collection: Collection,
  entry: DBModel,
): Model => {
  const mappedBase = {
    ...entry,
    createdAt: new Date(entry.createdAt),
    updatedAt: entry.updatedAt ? new Date(entry.updatedAt) : entry.updatedAt,
  } as Model;

  if (collection === Collection.Applications) {
    const application = mappedBase as unknown as Application;

    return {
      ...application,
      applicationDate: new Date(application.applicationDate),
    } as unknown as Model;
  } else {
    return mappedBase;
  }
};
