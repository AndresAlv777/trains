import * as express from "express";
import { Response } from "express";

export abstract class BaseController {
	public static jsonResponse(res: express.Response, code: number, message: string): Response {
		return res.status(code).json({ message });
	}

	protected ok<T>(res: express.Response, dto?: T): Response {
		if (dto) {
			res.type("application/json");

			return res.status(200).json(dto);
		}

		return res.sendStatus(200);
	}

	protected created(res: express.Response): Response {
		return res.sendStatus(201);
	}

	protected clientError(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(res, 400, message ? message : "Unauthorized");
	}

	protected unauthorized(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(res, 401, message ? message : "Unauthorized");
	}

	protected unprocessable(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(
			res,
			422,
			message ? message : "Error on request body|query|param"
		);
	}

	protected forbidden(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(res, 403, message ? message : "Forbidden");
	}

	protected notFound(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(res, 404, message ? message : "Not found");
	}

	protected conflict(res: express.Response, message?: string): Response {
		return BaseController.jsonResponse(res, 409, message ? message : "Conflict");
	}

	protected todo(res: express.Response): Response {
		return BaseController.jsonResponse(res, 400, "TODO");
	}

	protected fail(res: express.Response, error: Error | string): Response {
		return res.status(500).json({
			message: error.toString(),
		});
	}
}
