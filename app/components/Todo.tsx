import {
	Button,
	Card,
	Checkbox,
	Container,
	Icon,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { NextComponentType, NextPage } from "next";
import { useEffect, useState } from "react";
import { ITodo } from "../interfaces/TodoInterface";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type props = {
	todo: ITodo;
	onChange: (todo: ITodo) => void;
	onDelete: (todo: ITodo) => void;
};

const Todo = ({ todo, onChange, onDelete }: props) => {
	useEffect(() => {
		console.log(todo);
	}, [todo]);

	return (
		<Card
			sx={{
				width: "100%",
				marginBottom: "1rem",
				flex: "1 1 auto",
				minHeight: "3rem",
				boxShadow: "3",
				borderRadius: "2",
			}}
		>
			<Container>
				<Stack direction={"row"}>
					<Checkbox
						checked={todo.completed}
						onChange={() => {
							onChange(todo);
						}}
						size={"small"}
					/>
					<Typography variant="body1">
						{todo.title}
						<Typography variant="body2" color="textSecondary">
							{todo.description ? todo.description : ""}
						</Typography>
					</Typography>

					<IconButton
						sx={{
							marginLeft: "auto",
						}}
						color="warning"
						onClick={() => {
							onDelete(todo);
						}}
					>
						<DeleteForeverIcon />
					</IconButton>
				</Stack>
			</Container>
		</Card>
	);
};

export default Todo;
