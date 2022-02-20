// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { pool as db } from "../../../app/database";
import { ITodo, ITodoCreate } from "../../../app/interfaces/TodoInterface";

type Data = {
	msg?: string;
	todo?: ITodo;
};

export default async function todoHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "GET") {
		return res.status(405).send({
			msg: "Method not allowed",
		});
	}

	/**
	 * Takes a data object that has the format
	 *
	 * {
	 * 	title: string,
	 * 	description: string,
	 * 	createdBy: number,
	 * }
	 */

	/**
	 * Example request:
	 * {
    	"title": "Hallo Test!",
    	"description": "Wow Coole API!",
    	"createdBy": "1"
	 * }
	 * 
	 */

	const todo = req.body as ITodoCreate;
	console.log(todo);

	switch (req.method) {
		case "POST":
			if (todo === undefined) {
				return res.status(400).send({
					msg: "Missing todo object",
				});
			}

			if (todo.title === undefined) {
				return res.status(400).send({
					msg: "Missing title",
				});
			}

			if (todo.createdBy === undefined) {
				todo.createdBy = 1;
			}

			try {
				const { rows } = await db.query(
					`INSERT INTO todos (created_by,title,description) VALUES ($1, $2, $3) RETURNING *`,
					[1, todo.title, todo.description]
				);

				res.status(200).json({
					msg: "Todo created successfully",
					todo: rows[0],
				});
			} catch (err: any) {
				res.status(500).json({
					msg: err.message,
				});
			}
			break;

		//Update a already existing todo
		//1. Check if todo exists
		//2. Update todo with the new data

		case "PUT":
			let errorMsg: string = "";

			if (todo === undefined) {
				errorMsg = "Missing todo object\n";
			}

			if (todo.id === undefined) {
				errorMsg += "nMissing id\n";
			}

			if (todo.title === undefined) {
				return res.status(400).send({
					msg: (errorMsg += "Missing title\n"),
				});
			}

			try {
				const { rows } = await db.query(
					`UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4`,
					[todo.title, todo.description, todo.completed, todo.id]
				);

				console.log(rows[0]);

				res.status(200).json({
					msg: "Todo updated successfully",
				});
			} catch (err: any) {
				res.status(500).json({
					msg: err.message,
				});
			}

			break;

		case "DELETE":
			if (todo === undefined) {
				return res.status(400).send({
					msg: "Missing todo object",
				});
			}

			if (todo.id === undefined) {
				return res.status(400).send({
					msg: "Missing id",
				});
			}

			try {
				const { rows } = await db.query("DELETE FROM todos WHERE id = $1", [
					todo.id,
				]);

				res.status(200).json({
					msg: "Todo deleted successfully",
				});
			} catch (err: any) {
				res.status(500).json({
					msg: err.message,
				});
			}
			break;

		default:
			break;
	}
}
