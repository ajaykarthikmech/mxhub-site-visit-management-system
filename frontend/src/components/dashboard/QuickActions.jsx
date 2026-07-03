import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

export default function QuickActions() {
  return (
    <Card elevation={0} sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Quick Actions
        </Typography>

        <Stack spacing={2}>
          <Button variant="contained">
            New Site Visit
          </Button>

          <Button variant="outlined">
            Add Company
          </Button>

          <Button variant="outlined">
            Generate Report
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}