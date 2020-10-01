import bcrypt from 'bcryptjs';
import { encode, decode } from '../utils/jwtTokenizer';
import Models from '../database/models';

class userController {

	static async signin(req, res) {
		try {
			const { email, password } = req.body,
				{ Users } = Models,
				registered = await Users.findOne({
					where: {
						email
					}
				});

			if (!registered) {
				return res.status(401).json({
					status: 401,
					error: "Incorrect email or password"
				});
			}

			const truePassword = await bcrypt.compareSync(password, registered.password);

			if (!truePassword) {
				return res.status(401).json({
					status: 401,
					error: "Incorrect email or password"
				});
			}
			const token = encode({
				email,
				preferedLang: registered.preferedLang
			});
			const data = {
				id: registered.id,
				firstName: registered.firstName,
				lastName: registered.lastName,
				email: registered.email,
				role: registered.role,
				createdAt: registered.createdAt,
				updatedAt: registered.updatedAt
			};
			return res.status(200).json({
				status: 200,
				message: "Login successfully",
				data,
				token
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				error: error.message
			});
		}
	}

}

export default userController;
