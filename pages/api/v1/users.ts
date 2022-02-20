// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { db } from "../../../app/database";
import { IUser } from "../../../app/interfaces/IUser";

type Data = {
	msg?: string;
	user?: IUser;
	users?: IUser[];
	length?: number;
};

export default async function todoHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case "GET":
			try {
				const { rows } = await db.query("SELECT * FROM users");

				const users: IUser[] = [];

				res.status(200).json({
					length: users.length,
					users: rows as unknown as IUser[],
				});
			} catch (err: any) {
				res.status(500).json({
					msg: err.message,
				});
			}

			break;

		default:
			return res.status(500).end();
	}
}
