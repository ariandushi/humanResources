import { Guid } from "guid-typescript";

export interface IUser {
    username: string;
    roles: string;
    userId: Guid;
  }