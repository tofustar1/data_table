export interface ICountryResponse {
  name: {
    common: string;
  }
  flags: {
    png: string;
  };
  capital: string[] | undefined;
  population: number;
}

export interface ICountry {
  id: number;
  name: string;
  flag: string;
  capital: string;
  population: number;
}