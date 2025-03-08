import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteAuthToken } from "../services/axiosInstance";
import { ExitToApp } from "@mui/icons-material";
import { useState } from "react";

const LogoutButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate(); // useNavigate はコンポーネントのトップレベルで呼び出す

  const handleLogout = () => {
    deleteAuthToken(); // トークンを削除
    setOpen(false);
    navigate("/"); // ログインページへリダイレクト
  };

  return (
    <>
      <Button color="error" onClick={handleClickOpen}>
        <ExitToApp />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent dividers sx={{ backgroundColor: "#ffffff", padding: 5 }}>
          <DialogContentText color="textPrimary">
            システムからログアウトしますがよろしいですか
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#ffffff" }}>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button color="error" onClick={handleLogout} variant="outlined">
            ログアウト
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutButton;
