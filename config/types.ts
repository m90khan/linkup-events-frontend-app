export interface event {
  id: number;
  name: string;
  slug: string;
  venue: string;
  address: string;
  speakers: string;
  date: string;
  time: string;
  description: string;
  image?: {
    formats?: {
      thumbnail?: {
        url?: string;
      };
      medium?: {
        url?: string;
      };
    };
  };
  link: string;
}
export interface AddValues {
  name: string;
  speakers: string;
  venue: string;
  address: string;
  date: string;
  time: string;
  description: string;
  link: string;
}
