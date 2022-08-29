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
  characters: {
    items: CharacterType[];
  };
  dates: DateType[];
};

export type CreatorType = {
  role: string;
  name: string;
};

export type CharacterType = {
  name: string;
};

export type DateType = {
  date: string;
};
