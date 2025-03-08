import logo from "../assets/oshiel.png";
import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const MyAppBar = styled(AppBar)({
  backgroundColor: "white",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
});

const handleNotificationClick = () => {
  // 実装予定
  alert("通知設定ダイアログを表示します。");
};

const handleInfoClick = () => {
  // 実装予定
  alert("ヘルプページを表示します。");
};

const Header = () => {
  return (
    <MyAppBar position="fixed" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="oshiel logo" height={40} />
        </Box>
        <Box>
          <Button
            component={Link}
            to="/news"
            sx={{
              color: "text.primary",
              backgroundColor: "transparent",
              borderColor: "transparent",
              "&:hover": {
                color: "primary.light",
                backgroundColor: "transparent",
                borderColor: "transparent",
              },
            }}
          >
            ニュース
          </Button>
          <Button
            component={Link}
            to="/bookmark"
            sx={{
              color: "text.primary",
              backgroundColor: "transparent",
              borderColor: "transparent",
              "&:hover": {
                color: "primary.light",
                backgroundColor: "transparent",
                borderColor: "transparent",
              },
            }}
          >
            お気に入り
          </Button>
          <IconButton color="primary" onClick={handleNotificationClick}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleInfoClick}>
            <InfoOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </MyAppBar>
  );
};

export default Header;
