import { ReactNode } from 'react';
import { DBApplication, DBModelBase } from './database';

export enum Collection {
  Applications = 'applications',
}

export type ModelBase = Omit<DBModelBase, 'createdAt' | 'updatedAt'> & {
  createdAt: Date;
  updatedAt?: Date;
};

export enum ApplicationStatus {
  Sent = 'sent',
  InProgress = 'inProgress',
  Rejected = 'rejected',
  Accepted = 'accepted',
  Hired = 'hired',
  Archived = 'archived',
}

export enum Currency {
  PLN = 'pln',
  USD = 'usd',
  GBP = 'gbp',
  EUR = 'eur',
}

export enum ContractType {
  B2B = 'b2b',
  ContractOfEmployment = 'contractOfEmployment',
  MandateContract = 'mandateContract',
}

export type Application = ModelBase &
  Omit<DBApplication, 'applicationDate'> & {
    applicationDate: Date;
  };

export enum Status {
  Success = 'success',
  Failure = 'failure',
}

export interface DropdownOption<T> {
  display: ReactNode;
  displaySelected?: ReactNode;
  value: T;
}
