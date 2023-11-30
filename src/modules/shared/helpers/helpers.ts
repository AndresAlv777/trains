import express from "express";
import jwt from "jsonwebtoken";

import { AsyncRequestHandler } from "../types/shared.types";
import {loadCredentials} from "../../../config/enviroment";

const asyncHandler = (fn: AsyncRequestHandler): AsyncRequestHandler => {
	return (req: express.Request, res: express.Response, next?: express.NextFunction) => {
		return Promise.resolve(fn(req, res, next)).catch(next);
	};
};

const createToken = (claim: string) =>  {
	const { JWT_TOKEN_PASS } = loadCredentials();

	return jwt.sign( {email: claim}, JWT_TOKEN_PASS, {
		expiresIn: '1d'
	});
};

export { asyncHandler, createToken };
