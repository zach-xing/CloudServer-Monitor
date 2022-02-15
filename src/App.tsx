import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  LightMode as LightModeIcon,
  Nightlight as NightlightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import ThemeModeContext from "./store/theme";
import routes from "./routes";
import CPU from "./views/CPU";
import Memory from "./views/Memory";
import Network from "./views/Network";
import { Main, AppBar, DrawerHeader, HeaderArea } from "./App.styles";

const drawerWidth = 240;

export default function App() {
  const navigate = useNavigate();
  const route = useLocation(); // URL 路由信息
  const [selectedPath, setSelectedPath] = useState("");
  const theme = useTheme();
  const themeMode = React.useContext(ThemeModeContext);

  useEffect(() => {
    setSelectedPath(route.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 编程式导航，并且切换样式表示选中当前导航
  const handleListItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    path: string,
    index: number
  ) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={true}>
        <Toolbar>
          <HeaderArea>
            <Typography variant="h6" noWrap component="div">
              Server monitor
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={themeMode.toggleThemeMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <NightlightIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </HeaderArea>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <DrawerHeader>
          {/* <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((item, index) => (
            <ListItemButton
              key={item.path}
              selected={selectedPath === item.path}
              onClick={(event) => handleListItemClick(event, item.path, index)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Main open={true} style={{overflowY: "hidden"}}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<CPU />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/network" element={<Network />} />
        </Routes>
      </Main>
    </Box>
  );
}
