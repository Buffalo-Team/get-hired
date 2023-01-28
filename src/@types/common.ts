export enum Collection {
  Applications = 'applications',
}

export interface IModelBase {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
}

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

export interface IApplication extends IModelBase {
  companyName: string;
  roleName: string;
  applicationDate: Date;
  status: ApplicationStatus;
  linkToOffer: string;
  salaryRange: {
    from: number;
    to: number;
    currency: Currency;
    contractType: ContractType;
  };
}

export enum Status {
  Success = 'success',
  Failure = 'failure',
}
