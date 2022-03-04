import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ITask } from "../interfaces/ITask";

interface CompletedTaskListProps {
	tasks: ITask[];
}

const CompletedTaskList = (props: CompletedTaskListProps) => {
	return (
		<Paper
			sx={{
				padding: "1rem",
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
								<Button color="warning" variant="contained">
									Undo
								</Button>
							</ListItem>
							<Divider variant="fullWidth" color="white" />
						</>
					);
				})}
			</List>
		</Paper>
	);
};

export default CompletedTaskList;
