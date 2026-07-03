import {
  Typography,
  Box,
} from "@mui/material";

import GlassCard from "../common/GlassCard";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Completed", value: 12 },
  { name: "Ongoing", value: 8 },
  { name: "Pending", value: 5 },
];

const COLORS = [
  "#10B981",
  "#2563EB",
  "#F59E0B",
];

export default function ProjectChart() {
  return (
    <GlassCard sx={{ height: "100%" }}>
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Project Status
      </Typography>

      <Box
        sx={{
          height: 320,
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              height={36}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </GlassCard>
  );
}