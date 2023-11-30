import { Request, Response } from 'express';

export interface IAuth {
    email: string;
    password: string;
}

export interface IAuthController {
    Login(req: Request, res: Response): Promise<Response>;
}

export interface IAuthService {
    Login(body: IAuth): Promise<object>;
}