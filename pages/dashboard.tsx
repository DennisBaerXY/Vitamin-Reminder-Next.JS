//Types
import { ITask } from "../app/interfaces/ITask";

//Components MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CompletedTaskList from "../app/components/CompletedTaskList";
import NavBar from "../app/components/NavBar";
import PiChartCompletion from "../app/components/PiChartCompletion";
import TodayTaskList from "../app/components/TodayTaskList";

//Icons

import ArrowForward from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";

export default function DashboardPage() {
	const tasks: ITask[] = [
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},
		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},

		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},

		{
			id: 1,
			title: "Task 1",
			description: "Description 1",
			targetAmount: 1,
			completed: true,
		},
		{
			id: 2,
			title: "Task 2",
			description: "Description 2",
			targetAmount: 2,
			completed: false,
		},
	];

	return (
		<Box>
			<NavBar title="Dashboard" />
			{/**
			 *
			 * Grid layout for the dashboard page
			 *     .  #
			 *     -  #
			 *
			 */}

			<Grid
				container
				mx={3}
				pt={3}
				spacing={{
					xs: 2,
					sm: 4,
					md: 6,
				}}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={5}
					order={{
						xs: 3,
						sm: 3,
						md: 1,
					}}
				>
					<Box width={"100%"} position="relative" overflow="visible">
						<Typography variant="h3" color={"primary"} textAlign="center">
							Already completed today
						</Typography>
						<Box
							p={{
								xs: 2,
								sm: 2,
								md: 2,
							}}
							sx={{
								overflowY: "auto",
							}}
							height={{
								xs: "auto",
								sm: "50%",
								md: "40vh",
							}}
							mb={3}
						>
							<CompletedTaskList tasks={tasks} />
						</Box>

						<Paper
							sx={{
								marginLeft: "1rem",
							}}
						>
							<Box width="300px" mx="auto">
								<PiChartCompletion
									amountCompleted={3}
									amountIncomplete={10}
									label="Daily stats"
								/>
							</Box>
						</Paper>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={7}
					order={{
						xs: 1,
						sm: 1,
						md: 2,
					}}
				>
					<Container>
						<Typography variant="h3" color={"primary"} textAlign="center">
							Today remaining!
						</Typography>
						<Box
							height={{
								xs: "auto",
								sm: "50%",
								md: "70vh",
							}}
						>
							<TodayTaskList tasks={tasks} />
						</Box>

						<Box
							mt={{
								xs: 2,
								sm: 2,
								md: 1,
							}}
							mb={{
								xs: 4,
								sm: 4,
								md: 3,
							}}
						>
							<Button
								variant="contained"
								size="large"
								color="secondary"
								fullWidth
								endIcon={<ArrowForward />}
							>
								Add new task
							</Button>
						</Box>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}
