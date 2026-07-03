import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Box,
} from "@mui/material";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

export default function CompanyCard({ company }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        transition: ".3s",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(37,99,235,.12)",
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 56,
              height: 56,
            }}
          >
            <BusinessRoundedIcon />
          </Avatar>

          <Chip
            label={company.status}
            color="success"
          />
        </Box>

        <Typography
          mt={2}
          variant="h6"
          fontWeight={700}
        >
          {company.name}
        </Typography>

        <Typography color="text.secondary">
          {company.industry}
        </Typography>

        <Typography mt={2}>
          Projects : {company.projects}
        </Typography>

        <Typography>
          Contacts : {company.contacts}
        </Typography>

      </CardContent>
    </Card>
  );
}