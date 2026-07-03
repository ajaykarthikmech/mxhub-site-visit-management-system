import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const activities = [
  "Ashok Leyland report submitted",
  "Bosch customer signed report",
  "PDF generated",
  "Email sent successfully",
];

export default function ActivityTimeline() {
  return (
    <Card elevation={0} sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Recent Activity
        </Typography>

        <List>
          {activities.map((item, index) => (
            <ListItem key={index}>
              {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}