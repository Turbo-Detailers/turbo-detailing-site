export interface BaseCustomer {
  name: string;
  email: string;
  phone_number: string;
  customer_id: string;
  role: CUSTOMER_ROLE;
}

export enum CUSTOMER_ROLE {
  ADMIN = "admin",
  EXOTIC = "exotic",
  MAINTENANCE = "maintenance",
  REGULAR = "regular",
}
