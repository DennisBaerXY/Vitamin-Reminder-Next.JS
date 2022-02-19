// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { pool as db } from "../../../app/database";

type Data = {
	msg?: string;
	todos?: Todo[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const todos: Todo[] = [];

	try {
		const { rows } = await db.query(
			`SELECT * FROM todos WHERE completed = false`
		);

		todos.push(...rows);

		res.status(200).json({
			todos,
		});
	} catch (err: any) {
		res.status(500).json({
			msg: err.message,
		});
	}
}
