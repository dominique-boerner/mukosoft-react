import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { RouteUtil } from "./util/RouteUtil";

const Router = () => {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <BrowserRouter>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            MukoSoft
          </Typography>
          <IconButton>
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>
        <Routes>
          {RouteUtil.getRoutes().map((route, index) => (
            <Route
              key={`route_${index}`}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={navIndex}
          onChange={(event, newValue) => {
            setNavIndex(newValue);
          }}
        >
          {RouteUtil.getBottomNavigationActions().map((action, index) => (
            <BottomNavigationAction
              key={`actionButton_${index}`}
              icon={action.icon}
              component={Link}
              to={action.to}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </BrowserRouter>
  );
};

export default Router;
