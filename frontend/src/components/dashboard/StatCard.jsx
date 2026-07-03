import { motion } from "framer-motion";

import {
  Box,
  Typography,
} from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFFFFF",
          borderRadius: 4,
          p: 3,
          border: "1px solid #E5E7EB",
          boxShadow: "0 10px 30px rgba(15,23,42,.06)",
          overflow: "hidden",
          transition: "all .25s ease",

          "&:hover": {
            boxShadow: "0 20px 45px rgba(15,23,42,.12)",
          },
        }}
      >
        {/* Top Accent Line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 4,
            bgcolor: color,
          }}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Left */}
          <Box>
            <Typography
              sx={{
                color: "#64748B",
                fontWeight: 600,
                fontSize: 15,
                mb: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: 42,
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1,
              }}
            >
              {value}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#10B981",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              ↑ 12% this month
            </Typography>
          </Box>

          {/* Right Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 4,
              bgcolor: `${color}15`,
              color: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "& svg": {
                fontSize: 34,
              },
            }}
          >
            {icon}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}