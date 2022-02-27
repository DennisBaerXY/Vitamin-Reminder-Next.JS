import type { NextPage } from "next";
import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import theme from "../app/theme";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Box>
			<Box
				display={"flex"}
				m={5}
				sx={{
					mx: "auto",
					width: "90%",
				}}
			>
				<Box mt={2}>
					<Typography variant="h3" textAlign="center" lineHeight={1}>
						Take it.
					</Typography>
					<Typography variant="subtitle1" lineHeight={1}>
						Your easy reminder for Daily Intake of Mediaction
					</Typography>
				</Box>

				<Box
					ml={"auto"}
					display="flex"
					gap={3}
					flexDirection={"row"}
					alignItems="center"
				>
					<Link href="/" passHref>
						<Button>Home</Button>
					</Link>
					<Link href="https://github.com/DennisBaerXY/DennisBaerXY">
						<a
							target="_blank"
							rel="noopener noreferrer"
							style={{
								textDecoration: "none",
							}}
						>
							<Button>Projects</Button>
						</a>
					</Link>
				</Box>

				<Box ml={2} display="flex" alignItems="center" gap={2}>
					<Link href="/signup" passHref>
						<Button variant="contained" color="secondary">
							Get started
						</Button>
					</Link>

					<Link href="/login" passHref>
						<Button variant="contained" color="secondary" href="/login">
							Log in
						</Button>
					</Link>
				</Box>
			</Box>{" "}
			{
				// End of Navbar
			}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					mx: "auto",
					width: "95%",
					mt: "5rem",
				}}
			>
				<Box
					color={"primary"}
					width="100%"
					display="flex"
					flexDirection={"column"}
				>
					<Typography variant="h1" width="100%">
						Create{" "}
						<span style={{ color: theme.palette.secondary.main }}> easy </span>{" "}
						<br />
						<span style={{ color: theme.palette.info.main }}>
							{" "}
							Reminders{" "}
						</span>{" "}
						for your needs.
					</Typography>

					<Box alignItems={"start"} width="25rem" mt={10}>
						<Typography variant="h3">Getting Started</Typography>
						<Typography variant="body1">
							The first thing you need to do is create an Account. After the
							Account is created you can start and create your first Reminder so
							you will never forget it
						</Typography>

						<Box mt={3}>
							<Link href={"/signup"} as="/signup">
								<a
									style={{
										textDecoration: "none",
									}}
								>
									<Button variant="contained" color="success">
										Create Account
									</Button>
								</a>
							</Link>
						</Box>
					</Box>
				</Box>
				<Box
					width="100%"
					sx={{
						position: "relative",
					}}
				>
					<Image
						src={"/images/undraw_LandingPage.svg"}
						layout="responsive"
						width={800}
						height={600}
						alt="Picture of a bird holding a Reminder"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
