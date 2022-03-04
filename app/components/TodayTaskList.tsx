import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ITask } from "../interfaces/ITask";

interface TodayTaskListProps {
	tasks: ITask[];
}

const TodayTaskList = (props: TodayTaskListProps) => {
	return (
		<Box
			sx={{
				height: "100%",
				overflowY: "auto",
			}}
		>
			<List
				sx={{
					width: "100%",
					color: "white",
				}}
				dense={true}
			>
				{props.tasks.map((task: ITask, i) => {
					return (
						<>
							<ListItem
								key={i}
								sx={{
									bgcolor: "primary.main",
								}}
							>
								<ListItemText
									primary={
										<Typography variant="subtitle1">{task.title}</Typography>
									}
									secondary={
										<Typography variant="body1">{task.description}</Typography>
									}
								/>
								<Box>
									<Grid
										container
										alignItems="center"
										justifyContent="center"
										spacing={{
											xs: 1,
											sm: 1,
											md: 2,
										}}
									>
										<Grid item xs={6} md={4}>
											<Button color="info" variant="contained" fullWidth>
												Edit
											</Button>
										</Grid>
										<Grid item xs={6} md={5}>
											<Button color="success" variant="contained" fullWidth>
												Done
											</Button>
										</Grid>

										<Grid item xs={12} md>
											<Typography variant="body1" textAlign="right">
												{task.currentAmount ? task.currentAmount : "0"} /{" "}
												{task.targetAmount}
											</Typography>
										</Grid>
									</Grid>
								</Box>
							</ListItem>
							<Divider variant="fullWidth" color="white" />
						</>
					);
				})}
			</List>
		</Box>
	);
};

export default TodayTaskList;
