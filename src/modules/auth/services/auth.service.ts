import { injectable } from "tsyringe";
import { IAuth, IAuthService } from "../contracts/auth.contract";
import { createToken } from "../../shared/helpers/helpers";

@injectable()
export class AuthService implements IAuthService {
    async Login(body: IAuth): Promise<object> {

        try {
            const {email, password} = body;

            if (!email) {
                throw new Error();
            }

            const newToken = createToken(email);

            return {
                newToken
            };

        } catch (error) {
            return {msg: 'Error en el Login'}
        }
    }
}