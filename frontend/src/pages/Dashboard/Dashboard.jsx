import MainLayout from "../../layouts/MainLayout";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import RecentVisitsTable from "../../components/dashboard/RecentVisitsTable";
import ProjectChart from "../../components/dashboard/ProjectChart";

import { Box } from "@mui/material";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Statistics Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          mt: 3,
        }}
      >
        <StatCard
          title="Companies"
          value={126}
          icon={<BusinessRoundedIcon />}
          color="#2563EB"
        />

        <StatCard
          title="Projects"
          value={42}
          icon={<FolderRoundedIcon />}
          color="#10B981"
        />

        <StatCard
          title="Site Visits"
          value={19}
          icon={<AssignmentRoundedIcon />}
          color="#F59E0B"
        />

        <StatCard
          title="Reports"
          value={210}
          icon={<DescriptionRoundedIcon />}
          color="#EF4444"
        />
      </Box>

      {/* Dashboard Widgets */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 3,
          mt: 4,
        }}
      >
        <RecentVisitsTable />

        <ProjectChart />
      </Box>
    </MainLayout>
  );
}