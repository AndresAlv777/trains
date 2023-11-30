import mongoose from "mongoose";

interface IDBConfig {
	user: string;
	pass: string;
	host: string;
	port: string;
	db: string;
}

export const connectDB = async (config: IDBConfig): Promise<void> => {
	const { user, pass, host, db } = config;

	mongoose.set("strictQuery", false);
	const uri = `mongodb+srv://${user}:${encodeURIComponent(pass)}@${host}/${db}?retryWrites=true&w=majority&serverSelectionTimeoutMS=30000&socketTimeoutMS=30000`;

	await mongoose.connect(uri);
};
