import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function WelcomeBanner() {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: 5,
        background:
          "linear-gradient(135deg,#2563EB,#1D4ED8,#0F172A)",
        color: "white",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Welcome back, Karthik
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.9 }}>
          Manage site visits, projects and customer reports from one place.
        </Typography>

        <Box mt={3}>
          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{
              bgcolor: "white",
              color: "#2563EB",
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#F3F4F6",
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