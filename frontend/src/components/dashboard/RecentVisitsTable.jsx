import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const rows = [
  {
    company: "Ashok Leyland",
    engineer: "Karthik",
    date: "03 Jul 2026",
    status: "Completed",
  },
  {
    company: "TVS Motors",
    engineer: "Rahul",
    date: "02 Jul 2026",
    status: "Pending",
  },
  {
    company: "Hyundai",
    engineer: "Ajay",
    date: "01 Jul 2026",
    status: "Ongoing",
  },
];

const getColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    case "Ongoing":
      return "info";
    default:
      return "default";
  }
};

export default function RecentVisitsTable() {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Recent Site Visits
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Engineer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.company}
              hover
              sx={{
                "&:last-child td": {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell>{row.company}</TableCell>

              <TableCell>{row.engineer}</TableCell>

              <TableCell>{row.date}</TableCell>

              <TableCell>
                <Chip
                  label={row.status}
                  color={getColor(row.status)}
                  size="small"
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary">
                  <VisibilityRoundedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}