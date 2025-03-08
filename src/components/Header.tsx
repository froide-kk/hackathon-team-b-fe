import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/oshiel.png";
import LogoutButton from "./LogoutButton";
import NotificationButton from "./NotificationButton";

const MyAppBar = styled(AppBar)({
  backgroundColor: "white",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
});

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authId"),
  );

  // localStorageの変化を監視して更新する
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("authId"));
    };

    // localStorageの変更イベントを監視
    window.addEventListener("storage", handleStorageChange);

    // クリーンアップ処理
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // useNavigateで遷移時にもtokenを更新するため
  useEffect(() => {
    setToken(localStorage.getItem("authId"));
  }, [navigate]); // navigateが変わるたびにtokenを更新

  return (
    <MyAppBar position="fixed" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="oshiel logo" height={40} />
        </Box>
        {token && (
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
            <NotificationButton />
            <LogoutButton />
          </Box>
        )}
      </Toolbar>
    </MyAppBar>
  );
};

export default Header;
