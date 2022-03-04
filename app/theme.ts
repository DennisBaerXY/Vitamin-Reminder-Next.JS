import { responsiveFontSizes, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "@fontsource/amiko/400.css";
import "@fontsource/amiko/600.css";
import "@fontsource/amiko/700.css";

import "@fontsource/overpass/100.css";
import "@fontsource/overpass/200.css";

import "@fontsource/overpass/300.css";
import "@fontsource/overpass/400.css";
import "@fontsource/overpass/500.css";

import "@fontsource/overpass/600.css";
import "@fontsource/overpass/700.css";
import "@fontsource/overpass/800.css";
import "@fontsource/overpass/900.css";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#2D2C2C",
			contrastText: "#fff",
		},
		secondary: {
			main: "#C71A01",
		},
		info: {
			main: "#D36326",
		},
		success: {
			main: "#539401",
		},
		warning: {
			main: "#FFB94F",
		},
		error: {
			main: "#EA0062",
		},
		background: {
			default: "#F2E6CF",
		},
		text: {
			primary: "#2D2C2C",
		},
	},
	typography: {
		fontFamily: ["Amiko", "Roboto"].join(","),

		body1: {
			fontFamily: "overpass",
		},
		body2: {
			fontFamily: "overpass",
		},
		button: {
			fontFamily: "overpass",
		},
		caption: {
			fontFamily: "overpass",
		},
		overline: {
			fontFamily: "overpass",
		},
	},
});

export default responsiveFontSizes(theme);
