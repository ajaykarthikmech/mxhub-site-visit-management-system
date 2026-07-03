import {
  Chip,
  Box,
  Typography,
} from "@mui/material";

import SectionCard from "../common/SectionCard";

const visits = [
  {
    id: "SV-001",
    company: "Ashok Leyland",
    engineer: "Karthik",
    status: "Completed",
  },
  {
    id: "SV-002",
    company: "Bosch",
    engineer: "Karthik",
    status: "Pending",
  },
  {
    id: "SV-003",
    company: "TVS",
    engineer: "Karthik",
    status: "Ongoing",
  },
];

export default function RecentVisitsTable() {
  return (
    <SectionCard title="Recent Site Visits">
      {visits.map((visit) => (
        <Box
          key={visit.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Box>
            <Typography fontWeight={600}>
              {visit.company}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {visit.id}
            </Typography>
          </Box>

          <Chip
            label={visit.status}
            color={
              visit.status === "Completed"
                ? "success"
                : visit.status === "Pending"
                ? "warning"
                : "primary"
            }
          />
        </Box>
      ))}
    </SectionCard>
  );
}