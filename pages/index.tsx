import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
	Button,
	Card,
	Checkbox,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import internal from "stream";
import { useCallback, useEffect, useRef, useState } from "react";
import Todo from "../app/components/Todo";
import { server } from "../app/config";
import { ITodo, ITodoCreate } from "../app/interfaces/TodoInterface";
import { Label } from "@mui/icons-material";
import { ThemeProvider } from "@mui/system";

type props = {
	todoList: ITodo[];
	length?: number;
};

const Home: NextPage<props> = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const [input, setInput] = useState("");

	const fetchTodos = useCallback(async () => {
		const response = await fetch(`${server}/api/v1/todos`);
		const data = await response.json();

		data.todos.sort((a: ITodo, b: ITodo) => {
			return a.id - b.id;
		});
		setTodos(data.todos);
	}, []);
	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const toggleTodo = async (todo: ITodo) => {
		//Toggle todo

		try {
			const response = await fetch(`${server}/api/v1/todo`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: todo.id,
					completed: !todo.completed,
				}),
			});

			if (response.ok) {
				const newTodos = todos.map((t: ITodo) => {
					if (t.id === todo.id) {
						return { ...t, completed: !t.completed };
					}
					return t;
				});
				setTodos(newTodos);
				return true;
			}
		} catch (error) {
			return false;
		}

		return false;
	};

	const deleteTodo = async (todo: ITodo) => {
		//Delete todo

		try {
			const response = await fetch(`${server}/api/v1/todo`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: todo.id }),
			});
			if (response.status === 200) {
				const newTodos = todos.filter((t: ITodo) => t.id !== todo.id);
				setTodos(newTodos);
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const insertTodo = async () => {
		//Insert todo
		const title = input;
		try {
			const response = await fetch(`${server}/api/v1/todo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
				}),
			});
			if (response.ok) {
				const newTodo = await response.json();

				const newTodos = [...todos, newTodo.todo];
				setTodos(newTodos);
				setInput("");
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log(error);
			return false;
		}
	};
	return (
		<Container>
			<Head>
				<title>Todo List</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Typography variant="h1" textAlign={"center"}>
					Todo List
				</Typography>
				<Stack
					direction="column"
					alignItems="center"
					sx={{
						maxWidth: "1000px",
						height: "100%",
						margin: "0 auto",

						maxHeight: "70vh",

						overflowY: "scroll",
						backgroundColor: "#CECECE",

						padding: "2rem",
					}}
					id="todo-list"
				>
					{todos.map((todo: ITodo) => (
						<Todo
							key={todo.id}
							todo={todo}
							onChange={toggleTodo}
							onDelete={deleteTodo}
						/>
					))}
				</Stack>

				<form
					onSubmit={(e) => {
						e.preventDefault();

						insertTodo();
					}}
				>
					<Grid
						container
						direction={"column"}
						sx={{
							margin: "0 auto",
							maxWidth: "500px",
							marginBottom: "2rem",
							marginTop: "1rem",
						}}
					>
						<TextField
							label={"Add todo"}
							variant="outlined"
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							id="text-input"
						/>

						<Button
							variant="contained"
							type="submit"
							sx={{
								marginTop: "1rem",
							}}
							onClick={() => insertTodo()}
							onSubmit={() => insertTodo()}
						>
							Add
						</Button>
					</Grid>
				</form>
			</main>
		</Container>
	);
};

export default Home;
