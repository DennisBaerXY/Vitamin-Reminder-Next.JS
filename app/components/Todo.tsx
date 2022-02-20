import { Checkbox, Container, Stack, Typography } from "@mui/material";
import { NextComponentType, NextPage } from "next";
import { useEffect, useState } from "react";
import { ITodo } from "../interfaces/TodoInterface";

type props = {
	todo: ITodo;
	onChange: (todo: ITodo) => void;
};

const Todo = ({ todo, onChange }: props) => {
	useEffect(() => {
		console.log(todo);
	}, [todo]);

	return (
		<Container>
			<Stack direction={"row"}>
				<Checkbox
					checked={todo.completed}
					onChange={() => {
						onChange(todo);
					}}
					size={"small"}
				/>
				<Typography variant="body1" margin={"auto 0"} height="auto">
					{todo.title}
				</Typography>
			</Stack>
		</Container>
	);
};

export default Todo;
