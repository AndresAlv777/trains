interface ICredentials {
	NODE_PORT: string;
	NODE_ENV: string;
	MONGO_HOST: string;
	MONGO_DB: string;
	MONGO_USER: string;
	MONGO_PASS: string;
	MONGO_PORT: string;
	JWT_TOKEN_PASS: string;
}

export const loadCredentials = (): ICredentials => {
	return {
		NODE_PORT: process.env.NODE_PORT!,
		NODE_ENV: process.env.NODE_ENV!,

		MONGO_HOST: process.env.MONGO_HOST!,
		MONGO_DB: process.env.MONGO_DB!,
		MONGO_USER: process.env.MONGO_USER!,
		MONGO_PASS: process.env.MONGO_PASS!,
		MONGO_PORT: process.env.MONGO_PORT!,

		JWT_TOKEN_PASS: process.env.JWT_TOKEN_PASS!,
	};
};
