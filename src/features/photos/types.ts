export interface Photo {
  id: number;
  urls: {
    regular: string;
  };
}

export interface InitPhoto {
  photos: Photo[];
}
