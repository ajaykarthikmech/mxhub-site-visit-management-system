import { Paper } from "@mui/material";

export default function GlassCard({ children, sx = {} }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        background: "rgba(255,255,255,.92)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(226,232,240,.8)",
        boxShadow: "0 15px 45px rgba(15,23,42,.08)",
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 25px 55px rgba(37,99,235,.15)",
        },

        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}