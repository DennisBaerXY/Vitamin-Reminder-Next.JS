// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { db } from "../../../../app/database";
import { IUser } from "../../../../app/interfaces/IUser";

type Data = {
	user?: IUser;
	users?: IUser[];
	msg?: string;
	length?: number;
};

export default async function todoHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case "POST":
			if (req.body === undefined) {
				return res.status(400).send({
					msg: "Missing Data",
				});
			}

			if (req.body.email === undefined) {
				return res.status(400).send({
					msg: "Missing email",
				});
			}

			const user = req.body as IUser;
			console.log(user);

			try {
				const queryResult = await db.query(
					`INSERT INTO users (email, password) VALUES ('${user.email}', '${user.password}') RETURNING *`
				);

				const row: unknown = queryResult.rows[0];
				const response: IUser = row as IUser;

				res.status(200).json({
					user: response,
				});
			} catch (err: any) {
				res.status(500).json({
					msg: err.message,
				});
			}
			break;

		case "GET":
			try {
				const queryResponse = await db.query("SELECT * FROM users", []);

				const rows: unknown = queryResponse.rows;

				console.log(queryResponse.rows);
				const users: IUser[] = rows as IUser[];

				res.status(200).json({
					length: users.length,
					users,
				});
			} catch (err: any) {
				console.log(err);
				res.status(504).end();
			}
		default:
			return res.status(501).end();
			break;
	}
}
