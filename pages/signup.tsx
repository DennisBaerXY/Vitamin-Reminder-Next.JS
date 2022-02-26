import AlternateEmail from "@mui/icons-material/AlternateEmail";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Lock from "@mui/icons-material/Lock";
import Person from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Link from "next/link";

import theme from "../app/theme";

export default function signupPage() {
	return (
		<Box width="100%">
			{
				//Navbar
			}

			<Box display="flex" flex="row">
				<Box
					height="100vh"
					bgcolor={"primary.main"}
					minWidth="350px"
					maxWidth={"38%"}
					pt={10}
				>
					<Box pl={10} pr={5}>
						<Typography variant="h3" color={"white"} lineHeight={1}>
							Take it.
						</Typography>
						<Typography variant="h4" color={"white"} lineHeight={1} mt={10}>
							Welcome! You are only a few Clicks away from using{" "}
							<span
								style={{
									color: theme.palette.warning.main,
								}}
							>
								{" "}
								Take it.
							</span>
						</Typography>
					</Box>

					<Box mt={10} position="relative" width="100%" mb={10} mx="auto">
						<Image
							src="/images/undraw_festivities_tvvj.svg"
							layout="responsive"
							width={600}
							height={400}
							alt="Festival with trees"
						/>
					</Box>
				</Box>
				{
					//Right Box with a Signup Form
				}
				<Box height="100vh" width="100%">
					<Box
						display="flex"
						flexDirection="row"
						ml={"auto"}
						justifyContent="end"
						mt={10}
						mr={20}
					>
						<Box>
							<Link href="/" as="/">
								<a
									style={{
										textDecoration: "none",
									}}
								>
									<Button color="primary">
										<Typography variant="body1">Home</Typography>
									</Button>
								</a>
							</Link>
						</Box>
						<Box ml={5}>
							<Link href="https://github.com/DennisBaerXY/">
								<a
									style={{
										textDecoration: "none",
									}}
									target="_blank"
								>
									<Button color="primary">
										<Typography variant="body1">Projects</Typography>
									</Button>
								</a>
							</Link>
						</Box>
					</Box>

					<Box ml={15} maxWidth="50%">
						<Button color="primary" startIcon={<ArrowBack />}>
							<Typography variant="body1">Back</Typography>
						</Button>

						<Typography variant="h3" color={"primary.main"} mt={2}>
							Signup
						</Typography>

						<Box mt={2}>
							<Typography variant="body1" fontWeight={700}>
								Manage all your Reminding needs in one place.
							</Typography>

							<Typography variant="body1">
								Lets get you all set up so you can add your Reminders fast!
							</Typography>
						</Box>

						<FormControl
							sx={{
								mt: 5,
								display: "flex",
								flexDirection: "column",
								gap: 2,
							}}
						>
							{
								//add corosponding icon to each input
							}
							<Box>
								<Typography variant="body1" fontWeight={700}>
									Username
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									sx={{
										backgroundColor: "white",
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<Person color="secondary" />
											</InputAdornment>
										),
									}}
								/>
							</Box>
							<Box>
								<Typography variant="body1" fontWeight={700}>
									Email
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									type="email"
									sx={{
										backgroundColor: "white",
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AlternateEmail color="secondary" />
											</InputAdornment>
										),
									}}
								/>
							</Box>
							<Box>
								<Typography variant="body1" fontWeight={700}>
									Password
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									type="password"
									sx={{
										backgroundColor: "white",
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<Lock color="secondary" />
											</InputAdornment>
										),
									}}
								/>
							</Box>
							<Box>
								<Typography variant="body1" fontWeight={700}>
									Confirm Password
								</Typography>
								<TextField
									variant="outlined"
									fullWidth
									color="primary"
									type="password"
									sx={{
										backgroundColor: "white",
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<Lock color="secondary" />
											</InputAdornment>
										),
									}}
								/>
							</Box>

							<Box mt={2} width="100%">
								<Button
									variant="contained"
									size="large"
									color="success"
									fullWidth
								>
									Create Account
								</Button>
							</Box>
						</FormControl>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
