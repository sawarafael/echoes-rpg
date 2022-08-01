import * as React from "react";
import { AppBar as MuiAppBar, Box, Fab, Fade, Toolbar } from "@mui/material";
import { Button, Title, MainContent } from "./Styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  window?: () => Window;
  children: any;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#top");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (to: string) => {
    navigate(`/${to}`);
  };

  console.log("pathname", location.pathname);

  return (
    <>
      <ElevationScroll>
        <MuiAppBar
          position="fixed"
          sx={{
            display: "flex",
            width: "100%",
            height: "70px",
            backgroundColor: "#303240",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
        >
          <Toolbar>
            <Title variant="h6" onClick={() => handleNavigate("")}>
              Echoes Fantasy
            </Title>
            <Box flexGrow={{ flexGrow: 1 }} />

            <Button
              variant="body1"
              onClick={() => handleNavigate("characters")}
              isSelected={location.pathname === "/characters"}
              sx={{
                mr: 5,
              }}
            >
              Personagens
            </Button>

            <Button
              variant="body1"
              onClick={() => handleNavigate("scenary")}
              isSelected={location.pathname === "/scenary"}
              sx={{
                mr: 5,
              }}
            >
              Cenário
            </Button>

            <Button
              variant="body1"
              onClick={() => handleNavigate("plot")}
              isSelected={location.pathname === "/plot"}
              sx={{
                mr: 5,
              }}
            >
              Enredo
            </Button>
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
      <Toolbar id="top" />
      <MainContent children={children} />
      <ScrollTop>
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;
