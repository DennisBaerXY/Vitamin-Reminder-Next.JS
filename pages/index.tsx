import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import prisma from "../app/lib/prisma";
import { Card, Checkbox, Container, Stack, Typography } from "@mui/material";
import internal from "stream";
import { useState } from "react";

type props = {
	todos: string;
	length: number;
};

const Home: NextPage<props> = ({ length, todos }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div>
			{length}
			{JSON.parse(todos).map((todo: Todo) => (
				<Card key={todo.id}></Card>
			))}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const todos = [
		{
			id: 1,
			title: "test",
			completed: false,
		},
	];

	return {
		props: {
			length: todos.length,
			todos: JSON.stringify(todos),
		},
	};
};

export default Home;
