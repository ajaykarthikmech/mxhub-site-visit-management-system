import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function WelcomeBanner() {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: 5,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #2563EB 0%, #1D4ED8 45%, #0F172A 100%)",
        color: "#fff",
        boxShadow: "0 20px 45px rgba(37,99,235,.25)",
      }}
    >
      <CardContent
        sx={{
          px: 5,
          py: 3.5,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            lineHeight: 1.1,
            mb: 1,
          }}
        >
          Welcome back, Karthik
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            opacity: 0.9,
            maxWidth: 700,
            mb: 3,
          }}
        >
          Manage site visits, projects and reports from one place.
        </Typography>

        <Box>
          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 3,
              bgcolor: "#FFFFFF",
              color: "#2563EB",
              fontWeight: 700,
              fontSize: 15,
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,.20)",
              transition: "all .25s ease",

              "&:hover": {
                bgcolor: "#F8FAFC",
                transform: "translateY(-2px)",
                boxShadow: "0 14px 30px rgba(0,0,0,.28)",
              },
            }}
          >
            New Site Visit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}