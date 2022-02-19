import { Checkbox, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Todo = ({ todo, onChange }) => {
	const [checked, setChecked] = useState(false);

	return (
		<Container>
			<Stack direction={"row"}>
				<Checkbox
					checked={checked}
					onChange={() => {
						setChecked(!checked);
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
