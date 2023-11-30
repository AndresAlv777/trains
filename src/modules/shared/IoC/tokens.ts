export const TOKENS = {
	//Auth
	IAuthController: Symbol.for('IAuthController'),
	IAuthService: Symbol.for('IAuthService'),

	//User
	IUserController: Symbol.for('IUserController'),
	IUserService: Symbol.for('IUserService'),
	IUserRepository: Symbol.for('IUserRepository'),

	//Train
	ITrainController: Symbol.for('ITrainController'),
	ITrainService: Symbol.for('ITrainService'),
	ITrainRepository: Symbol.for('ITrainRepository'),
}