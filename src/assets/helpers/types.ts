export interface IPerson {
  id: number;
  name: string;
  origName: null;
  origSurname: null;
  picId: number;
  surname: string;
  title: string;
  type: "person";
  url: string;
}

export interface IItemDate {
  id: number;
  type: string;
  content?: IItemDate[];
  [key: string]: any;
}