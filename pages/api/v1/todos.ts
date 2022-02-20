// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { db } from "../../../app/database";
import { ITodo } from "../../../app/interfaces/TodoInterface";

type Data = {
	msg?: string;
	todos?: ITodo[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const todos: ITodo[] = [];

	try {
		const { rows } = await db.query("SELECT * FROM todos", []);

		rows.forEach((todo: any) => {
			todos.push(todo);
		});

		//put the data in the right order

		res.status(200).json({
			todos,
		});
	} catch (err: any) {
		res.status(500).json({
			msg: err.message,
		});
	}
}
