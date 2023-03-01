export type UserTypes = {
  id: number;
  name: string;
};

export type MessageTypes = {
  massage: string;
  data: string;
};

export interface ServerResponseTypes<T> {
  data: T[];
}

export interface ServerResponseObjectTypes<T> {
  data: T;
}
