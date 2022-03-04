import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface NavBarProps {
	title: string;
}

const NavBar = ({ title }: NavBarProps) => {
	const style = (theme: Theme) => ({});

	return (
		<Box width="100%" display="flex" bgcolor="primary.main">
			<Grid container spacing={3} p={4}>
				<Grid item xs={3} p={0}>
					<Typography variant="h3" align="center" color="white">
						Take it.
					</Typography>
				</Grid>

				<Grid item sm={6}>
					<Typography variant="h3" align="center" color="secondary">
						{title}
					</Typography>
				</Grid>

				<Grid container item xs={3} color="white" alignContent={"center"}>
					<Grid item xs={6} lg={3}>
						<Link passHref href="/">
							<Button
								color="primary"
								sx={{
									color: "white",
								}}
							>
								{" "}
								Home
							</Button>
						</Link>
					</Grid>

					<Grid item sm={6} lg={3}>
						<Link href="https://github.com/DennisBaerXY">
							<a target="_blank" rel="noreferrer">
								<Button
									color="primary"
									sx={{
										color: "white",
										opacity: 0.5,
									}}
								>
									{" "}
									Projects
								</Button>
							</a>
						</Link>
					</Grid>

					<Grid item sm={12} lg={6}>
						<Button
							color="secondary"
							variant="contained"
							size="large"
							fullWidth
						>
							Log out
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default NavBar;
