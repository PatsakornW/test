import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AppsIcon from "@mui/icons-material/Apps";
import PeopleIcon from "@mui/icons-material/People";
const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: 100,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#2c0031",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <AppsIcon />
              <ListItemText primary="Dashboard" sx={{ marginLeft: 2 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/deposits">
              <AccountBalanceWalletIcon />
              <ListItemText primary="Deposits" sx={{ marginLeft: 2 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/withdraws">
              <AccountBalanceIcon />
              <ListItemText primary="Withdraws" sx={{ marginLeft: 2 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/customer">
              <PeopleIcon />
              <ListItemText primary="Customer" sx={{ marginLeft: 2 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ background: "gray" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="API Credential" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Change Password" />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem disablePadding sx={{ position: "absolute", bottom: 0 }}>
          <ListItemButton>
            <ListItemText primary="Logout" />
            <LogoutIcon />
          </ListItemButton>
        </ListItem>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
