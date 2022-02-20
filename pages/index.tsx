import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Card, Checkbox, Container, Stack, Typography } from "@mui/material";
import internal from "stream";
import { useCallback, useEffect, useState } from "react";
import Todo from "../app/components/Todo";
import { server } from "../app/config";
import { ITodo } from "../app/interfaces/TodoInterface";

type props = {
	todoList: ITodo[];
	length?: number;
};

const Home: NextPage<props> = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = useCallback(async () => {
		const response = await fetch(`${server}/api/v1/todos`);
		const data = await response.json();
		setTodos(data.todos);
	}, []);
	useEffect(() => {
		fetchTodos();
		console.log(todos);
	}, [fetchTodos]);

	const toggleTodo = (todo: ITodo) => {
		//Toggle todo
		const newTodos = todos.map((t: ITodo) => {
			if (t.id === todo.id) {
				return { ...t, completed: !t.completed };
			}
			return t;
		});
		setTodos(newTodos);
	};

	return (
		<Container>
			<Head>
				<title>Todo List</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Stack direction="column" alignItems="center">
					{todos.map((todo: Todo) => (
						<Todo key={todo.id} todo={todo} onChange={toggleTodo} />
					))}
				</Stack>
			</main>
		</Container>
	);
};

export default Home;
