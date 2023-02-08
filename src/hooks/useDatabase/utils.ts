import { Application, Collection, ModelBase } from '~/@types/common';

export const mapEntry = <T extends ModelBase>(collection: Collection, entry: T): T => {
  const mappedBase = {
    ...entry,
    createdAt: new Date(entry.createdAt),
    updatedAt: entry.updatedAt ? new Date(entry.updatedAt) : entry.updatedAt,
  };

  if (collection === Collection.Applications) {
    const application = mappedBase as unknown as Application;

    return {
      ...application,
      applicationDate: new Date(application.applicationDate),
    } as unknown as T;
  } else {
    return mappedBase;
  }
};
