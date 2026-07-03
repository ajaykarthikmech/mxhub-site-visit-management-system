import { Box } from "@mui/material";

import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Ashok Leyland",
    industry: "Automobile",
    projects: 4,
    contacts: 5,
    status: "Active",
  },
  {
    name: "Bosch",
    industry: "Industrial",
    projects: 2,
    contacts: 3,
    status: "Active",
  },
];

export default function CompanyGrid() {
  return (
    <Box
      sx={{
        mt: 3,
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        },
      }}
    >
      {companies.map((company) => (
        <CompanyCard
          key={company.name}
          company={company}
        />
      ))}
    </Box>
  );
}