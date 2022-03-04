import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import NavBar from "../../app/components/NavBar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

import ArrowForward from "@mui/icons-material/ArrowForward";
import DeleteForever from "@mui/icons-material/DeleteForever";

import { FormEvent, useEffect, useState } from "react";

import Image from "next/image";

import { useRouter } from "next/router";

interface IEditTaskData {
	title: string;
	description?: string;
	targetAmount: number;
	intervalAmount: number;
	intervalType: number;
}

interface IEditPageProps {
	id: string;
}

export default function EditPage({ id }: IEditPageProps) {
	const [title, setTitle] = useState<string>("");

	const [description, setDescription] = useState<string>("");

	const [intervalAmount, setIntervalAmount] = useState(1);
	const [intervalType, setIntervalType] = useState(0);

	const [targetAmount, setTargetAmount] = useState(1);

	const router = useRouter();

	useEffect(() => {
		setTitle("Title of the task: " + id);
		setDescription("Description of the task: " + id);
	}, []);

	function validateData(data: IEditTaskData): boolean {
		if (data.title.length === 0) {
			return false;
		}

		if (data.targetAmount <= 0) {
			return false;
		}

		if (data.intervalAmount <= 0) {
			return false;
		}

		return true;
	}

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			title,
			description,
			intervalAmount,
			intervalType,
			targetAmount,
		};

		if (validateData(data)) {
			console.table(data);
			console.log("Form submitted");
		} else {
			console.log("Invalid data");
		}
	}

	return (
		<Box>
			<NavBar title="Edit Reminder" />
			<Container>
				<Box display="flex" flexDirection={"column"} alignItems="center">
					<Box m={2} maxWidth="600px" width="100%" mt={10}>
						<Box mb={5}>
							<Button color="primary" startIcon={<ArrowBack />}>
								<Typography variant="body1">Back</Typography>
							</Button>
							<Typography variant="h3" color={"primary.main"} mt={2}>
								What do you want to Update
							</Typography>

							<Box mt={2}>
								<Typography variant="body1" fontWeight={700}>
									Update your current Reminder to fit your needs in the future!
								</Typography>
							</Box>
						</Box>

						<form
							onSubmit={(e) => {
								handleFormSubmit(e);
							}}
						>
							<Box>
								<Typography variant="body1" fontWeight={700}>
									Title
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									type="text"
									autoFocus={true}
									sx={{
										backgroundColor: "white",
									}}
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</Box>

							<Box mt={4} mb={1}>
								<Typography variant="body1" fontWeight={700}>
									Description (optional)
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									type="text"
									value={description}
									sx={{
										backgroundColor: "white",
									}}
									inputProps={{}}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Box>
							<Divider
								sx={{
									backgroundColor: "primary.main",
									height: "2px",
								}}
							/>

							<Box mt={3}>
								<Grid
									container
									spacing={{
										xs: 2,
										sm: 2,
										md: 2,
									}}
									alignItems="center"
								>
									<Grid item xs={5} alignContent="center">
										<Typography variant="body1" fontWeight={700}>
											Every
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<TextField
											variant="outlined"
											fullWidth
											color="primary"
											type="number"
											sx={{
												backgroundColor: "white",
											}}
											value={intervalAmount}
											onChange={(e) =>
												setIntervalAmount(Number(e.target.value))
											}
										/>
									</Grid>

									<Grid item xs={5}>
										<Select
											defaultValue={0}
											fullWidth
											sx={{
												backgroundColor: "white",
											}}
											value={intervalType}
											onChange={(e) => setIntervalType(Number(e.target.value))}
										>
											<MenuItem value={0}>Days</MenuItem>
											<MenuItem value={1}>Weeks</MenuItem>
										</Select>
									</Grid>
								</Grid>
							</Box>

							<Box mt={2}>
								<Grid
									container
									spacing={{
										xs: 2,
										sm: 2,
										md: 2,
									}}
									alignItems="center"
									justifyContent={"space-between"}
								>
									<Grid item xs={5} alignContent="center">
										<Typography variant="body1" fontWeight={700}>
											Amount
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<TextField
											variant="outlined"
											color="primary"
											type="number"
											sx={{
												backgroundColor: "white",
											}}
											inputProps={{
												min: 1,
											}}
											value={targetAmount}
											onChange={(e) =>
												setTargetAmount(
													Number(e.target.value) > 0
														? Number(e.target.value)
														: 1
												)
											}
										/>
									</Grid>
								</Grid>
							</Box>

							<Box mt={2}>
								<Button
									fullWidth
									type="submit"
									variant="contained"
									color="info"
									size="large"
								>
									Update Reminder
								</Button>
							</Box>
							<Box mt={2}>
								<Button
									fullWidth
									type="submit"
									variant="contained"
									color="error"
									size="large"
									endIcon={<DeleteForever />}
								>
									Delete this reminder
								</Button>
							</Box>
						</form>
					</Box>
				</Box>
			</Container>
			{/*
             Absolute positioned container at the left side of the screen for the image
            */}
			<Box
				sx={{
					position: "fixed",
					top: "10%",
					left: "2%",

					width: {
						md: "0px",
						lg: "20%",
						xl: "28%",
					},
				}}
			>
				<Image
					src={"/images/undraw_professional_card_otb4.svg"}
					alt="Drawing of woman looking at a reminder "
					width={"100%"}
					height={"100%"}
					objectFit="contain"
					layout="responsive"
				/>
			</Box>
			<Box
				sx={{
					position: {
						md: "initial",
						lg: "fixed",
					},
					bottom: "0%",
					right: {
						md: "0%",
						lg: "3%",
					},

					mx: {
						md: "auto",
						lg: "0%",
					},

					width: {
						md: "60%",
						sm: "200px",
						xs: "0",
						lg: "20%",
						xl: "28%",
					},
				}}
			>
				<Image
					src={"/images/undraw_friendship_mni7.svg"}
					alt="Drawing of woman looking at a reminder "
					width={"100%"}
					height={"100%"}
					objectFit="contain"
					layout="responsive"
				/>
			</Box>
		</Box>
	);
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { Delete, DeleteOutlined } from "@mui/icons-material";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.query;

	return {
		props: {
			id: id as string,
		},
	};
};
