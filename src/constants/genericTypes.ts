export type ComicType = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: CreatorType[];
  };
  dates: DateType[];
  description: string;
};

export type CreatorType = {
  role: string;
  name: string;
  resourceURI: string;
};

export type DateType = {
  date: string;
};
