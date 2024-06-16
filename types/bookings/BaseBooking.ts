export interface BaseBooking {
  maintenance: boolean;
  price: number;
  address: string;
  customer_id: string;
  date: Date;
  length_minutes: number;
  vehicles: { make: string; model: string; year: number }[];
  type: DETAILING_TYPE;
}

export enum DETAILING_TYPE {
  TURBO = "Turbo",
  INTERIOR = "Interior",
  EXTERIOR = "Exterior",
}
