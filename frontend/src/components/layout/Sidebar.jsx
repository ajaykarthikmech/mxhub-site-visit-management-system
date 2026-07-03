import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardRoundedIcon />,
    path: "/dashboard",
  },
  {
    text: "Companies",
    icon: <BusinessRoundedIcon />,
    path: "/companies",
  },
  {
    text: "Projects",
    icon: <FolderRoundedIcon />,
    path: "/projects",
  },
  {
    text: "Site Visits",
    icon: <AssignmentRoundedIcon />,
    path: "/site-visits",
  },
  {
    text: "Reports",
    icon: <DescriptionRoundedIcon />,
    path: "/reports",
  },
  {
    text: "Settings",
    icon: <SettingsRoundedIcon />,
    path: "/settings",
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
  <motion.div
    animate={{
      width: collapsed ? 80 : 300,
    }}
    transition={{ duration: 0.3 }}
    style={{
      background: "#0F172A",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid rgba(255,255,255,.06)",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        px: 2,
        py: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="MX-HUB"
            sx={{
              width: 55,
              height: 55,
              objectFit: "contain",
            }}
          />

          <Box>
            <Typography
              fontWeight={800}
              fontSize={22}
              color="white"
            >
              MX-HUB
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 12,
              }}
            >
              Technocare Pvt. Ltd.
            </Typography>
          </Box>
        </Box>
      )}

      <IconButton
        onClick={() => setCollapsed(!collapsed)}
        sx={{ color: "white" }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </Box>

    <Divider sx={{ bgcolor: "#1E293B" }} />

    {/* Menu */}
    <List sx={{ mt: 2 }}>
      {menuItems.map((item) => (
        <NavLink
          key={item.text}
          to={item.path}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <ListItemButton
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 3,
                color: "#fff",
                bgcolor: isActive ? "#2563EB" : "transparent",

                "&:hover": {
                  bgcolor: "#1E40AF",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              {!collapsed && (
                <ListItemText primary={item.text} />
              )}
            </ListItemButton>
          )}
        </NavLink>
      ))}
    </List>

    <Box sx={{ flexGrow: 1 }} />

    <Divider sx={{ bgcolor: "#1E293B" }} />

    {/* Bottom Profile */}
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar>K</Avatar>

        {!collapsed && (
          <Box>
            <Typography
              color="white"
              fontWeight={700}
            >
              Karthik
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 13,
              }}
            >
              Executive
            </Typography>
          </Box>
        )}
      </Box>

      <ListItemButton
        sx={{
          mt: 2,
          borderRadius: 3,
          color: "#FB7185",

          "&:hover": {
            bgcolor: "#1E293B",
          },
        }}
      >
        <ListItemIcon sx={{ color: "#FB7185" }}>
          <LogoutRoundedIcon />
        </ListItemIcon>

        {!collapsed && (
          <ListItemText primary="Logout" />
        )}
      </ListItemButton>
    </Box>
  </motion.div>
);
}