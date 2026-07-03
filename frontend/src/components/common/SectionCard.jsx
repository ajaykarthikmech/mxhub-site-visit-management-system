import { Paper, Typography, Box } from "@mui/material";

export default function SectionCard({
  title,
  children,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E2E8F0",
        boxShadow:
          "0 10px 35px rgba(15,23,42,.06)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        {title}
      </Typography>

      <Box>
        {children}
      </Box>
    </Paper>
  );
}