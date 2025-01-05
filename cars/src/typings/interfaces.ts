export interface FormState {
  name: string;
  cost: number;
}

export interface Car {
  name: string;
  cost: number;
  id: string; // UUID
}

export interface CarState {
  searchTerm: string;
  entities: Car[];
}
