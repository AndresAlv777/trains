import { Request, Response } from "express";

export interface IUser {
    name: string;
    lastname: string;
    email: string;
    password: string;
    cellphone: number;
    isActive?: boolean;
}

export interface IUserController {
    GetUser(req: Request, res: Response): Promise<Response>;
    GetUsers(req: Request, res: Response): Promise<Response>;
    PostUser(req: Request, res: Response): Promise<Response>;
    PutUser(req: Request, res: Response): Promise<Response>;
    DeleteUser(req: Request, res: Response): Promise<Response>;
}

export interface IUserService {
    GetUser(id: string): Promise<IUser>;
    GetUsers(): Promise<IUser[]>;
    PostUser(user: IUser): Promise<object>;
    PutUser(user: IUser): Promise<object>;
    DeleteUser(id: string): Promise<object>;
}

export interface IUserRepository {
    GetUser(id: string): Promise<IUser>;
    GetUsers(): Promise<IUser[]>;
    PostUser(user: IUser): Promise<void>;
    PutUser(user: IUser): Promise<void>;
    DeleteUser(id: string): Promise<void>;
}