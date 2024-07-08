import { Dispatch } from "react";

export type Movie = {
  id: number;
  name?: string;
  year: string | number;
  description: string;
  type: string;
  backdrop?: {
    url: string;
  };
  poster?: {
    url: string;
  };
  alternativeName: string;
  setUpdate?: Dispatch<React.SetStateAction<boolean>>;
};
