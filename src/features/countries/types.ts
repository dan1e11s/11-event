export interface Country {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
}

export interface InitCountryState {
  countries: Country[];
  nameCountry: string;
  codeNumber: string;
}
