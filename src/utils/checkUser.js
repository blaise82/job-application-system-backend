import { decode } from '../utils/jwtTokenizer';
import Models from '../database/models';

const { Users } = Models;
const checkUser = async (req, res, next) => {
  const Token = req.headers['x-access-token'];
  if (!Token) {
    return res.status(403).json({
      status: 403,
      error: "Please Login"
    });
  }
  const payload = decode(Token);
  const { email } = payload;
  const user = await Users.findOne({ where: { email } });
  const {
    isVerified
  } = user;

  req.user = user;
  next();
};
export default checkUser;
