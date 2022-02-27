import AlternateEmail from "@mui/icons-material/AlternateEmail";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Lock from "@mui/icons-material/Lock";
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
		<Box>
			<Box display="flex" flex="row" width={"100%"}>
				<Box
					height="100vh"
					bgcolor={"primary.main"}
					minWidth="600px"
					maxWidth={"38%"}
					pt={10}
				>
					<Box pl={10} pr={5}>
						<Typography variant="h3" color={"white"} lineHeight={1}>
							Take it.
						</Typography>
						<Typography variant="h4" color={theme.palette.warning.main} mt={7}>
							Welcome back!
						</Typography>
						<Typography variant="h5" color={"white"} lineHeight={1}>
							Good to see you again we missed you! Lets get right back in to it
							after you Logged in with your Account.
						</Typography>
					</Box>

					<Box mt={10} position="relative" width="100%">
						<Image
							src="/images/undraw_game_day_ucx9.svg"
							layout="responsive"
							width={600}
							height={400}
							objectFit="contain"
							alt="Festival with trees"
						/>
					</Box>
				</Box>
				{
					//Right Box with a Form
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

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							height: "75%",
						}}
					>
						{
							//Form
						}
						<Box ml={15} maxWidth="75%" width="50%">
							<Button color="primary" startIcon={<ArrowBack />}>
								<Typography variant="body1">Back</Typography>
							</Button>

							<Typography variant="h3" color={"primary.main"} mt={2}>
								Log In
							</Typography>

							<Box mt={2}>
								<Typography variant="body1" fontWeight={700}>
									Manage all your Reminding needs in one place.
								</Typography>

								<Typography variant="body1">
									Let's get you logged in real fast so you can check your
									reminders
								</Typography>
							</Box>

							<FormControl
								sx={{
									mt: 5,
									display: "flex",
									flexDirection: "column",
									gap: 2,
									width: "100%",
								}}
							>
								{
									//add corosponding icon to each input
								}

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

								<Box mt={2} width="100%">
									<Button
										variant="contained"
										size="large"
										color="success"
										fullWidth
									>
										Log in
									</Button>
								</Box>
								<Box>
									<Link href="/signup">
										<a
											style={{
												textDecoration: "none",
											}}
										>
											<Button endIcon={<ArrowForward />}>
												<Typography variant="body1" textTransform={"none"}>
													You dont have an account?
												</Typography>
											</Button>
										</a>
									</Link>
								</Box>
							</FormControl>
						</Box>

						{
							//Right side image
						}

						<Box id="image-container" my="auto" width={"20%"} mr={10}>
							<Image
								width={"400"}
								height={"800"}
								objectFit="cover"
								src={"/images/undraw_celebrating_rtuv.svg"}
								alt=""
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
