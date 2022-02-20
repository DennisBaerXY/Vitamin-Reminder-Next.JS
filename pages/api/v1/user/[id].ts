// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { db } from "../../../../app/database";
import { IUser } from "../../../../app/interfaces/IUser";

type Data = {
	user?: IUser;
	msg?: string;
};

export default async function todoHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { id } = req.query;
	switch (req.method) {
		case "GET":
			try {
				const result = await db.query(`SELECT * FROM users WHERE id = $1 `, [
					id,
				]);

				const row: unknown = result.rows[0];
				const user: IUser = row as IUser;

				res.status(200).json({
					user,
				});
			} catch (err: any) {
				console.log(err);

				res.status(502).json({
					msg: err.message,
				});
			}

			break;
		default:
			return res.status(500).end();
			break;
	}
}
