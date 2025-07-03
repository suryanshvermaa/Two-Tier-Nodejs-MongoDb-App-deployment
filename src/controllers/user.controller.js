import response from "../utils/response.js"
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const createUser = async (req, res, next) => {
	try {
		response(res,201,"User created",{});
	} catch (err) {
		next(err);
	}
};
