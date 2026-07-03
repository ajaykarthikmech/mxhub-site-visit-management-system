import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Badge,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import headerLogo from "../../assets/header-logo.png";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        background: "#fff",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          height: 78,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <Box
  component="img"
  src={headerLogo}
  alt="MX-HUB Technocare"
  sx={{
    height: 120,
    width: "auto",
    objectFit: "contain",
    cursor: "pointer",
    transition: "all .3s ease",

    "&:hover": {
      transform: "scale(1.03)",
    },
  }}
/>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {today}
          </Typography>

          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              width: 250,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />

          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 42,
              height: 42,
              fontWeight: 700,
            }}
          >
            K
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}