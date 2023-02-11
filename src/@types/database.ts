import { ApplicationStatus, ContractType, Currency } from './common';

export interface DBModelBase {
  id: number;
  createdAt: string;
  updatedAt?: string;
}
export interface DBApplication extends DBModelBase {
  companyName: string;
  roleName: string;
  applicationDate: string;
  status: ApplicationStatus;
  linkToOffer: string;
  salaryRange: {
    from: number;
    to: number;
    currency: Currency;
    contractType: ContractType;
  };
}
