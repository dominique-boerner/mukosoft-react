import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  createTheme,
  IconButton,
  Paper,
  ThemeOptions,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Medications from "./features/medications/Medications";
import Cookbook from "./features/cookbook/Cookbook";
import Community from "./features/community/Community";
import { orange, teal } from "@mui/material/colors";
import { ReactComponent as HomeIcon } from "./assets/icons/uicons-regular-rounded/svg/fi-rr-home.svg";
import { ReactComponent as CookbookIcon } from "./assets/icons/uicons-regular-rounded/svg/fi-rr-carrot.svg";
import { ReactComponent as CommunityIcon } from "./assets/icons/uicons-regular-rounded/svg/fi-rr-following.svg";
import { ReactComponent as MedicationIcon } from "./assets/icons/uicons-regular-rounded/svg/fi-rr-medicine.svg";
import { Settings } from "@mui/icons-material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: orange,
    background: {
      default: "#F6F7FB",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          lineHeight: "1.2",
        },
        h2: {
          lineHeight: "1.2",
        },
        h3: {
          lineHeight: "1.4",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "white",
          color: "teal",
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "1.953rem",
    },
    h2: {
      fontSize: "1.563rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
    h4: {
      fontSize: "1.1rem",
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
            <Route path="/" element={<Home />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/cookbook" element={<Cookbook />} />
            <Route path="/community" element={<Community />} />
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
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon className="bottom-navigation-action-icon" />}
              component={Link}
              to="/"
            />
            <BottomNavigationAction
              label="Medikamente"
              icon={
                <MedicationIcon className="bottom-navigation-action-icon" />
              }
              component={Link}
              to="/medications"
            />
            <BottomNavigationAction
              label="Kochbuch"
              icon={<CookbookIcon className="bottom-navigation-action-icon" />}
              component={Link}
              to="/cookbook"
            />
            <BottomNavigationAction
              label="Community"
              icon={<CommunityIcon className="bottom-navigation-action-icon" />}
              component={Link}
              to="/community"
            />
          </BottomNavigation>
        </Paper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
