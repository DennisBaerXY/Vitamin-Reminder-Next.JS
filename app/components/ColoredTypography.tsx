import Typography, { TypographyProps } from "@mui/material/Typography";

interface ColoredTypographyProps extends TypographyProps {
	color: string;
}

export default function ColoredTypography({
	color,
	children,
	...rest
}: ColoredTypographyProps) {
	return (
		<span
			style={{
				color: color,
			}}
		>
			<Typography {...rest}>{children}</Typography>
		</span>
	);
}
