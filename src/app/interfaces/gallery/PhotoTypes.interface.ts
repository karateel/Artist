export interface PhotoTypes {
    id: string;
    imageUrl: string;
    title: string;
    width: number;
    height: number;
    sizes: PhotoSizes
}

export interface PhotoSizes {
  width: number;
  height: number;
}