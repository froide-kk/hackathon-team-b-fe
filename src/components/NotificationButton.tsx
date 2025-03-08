import { NotificationsNone } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function NotificationButton() {
  const [open, setOpen] = useState(false);

  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
        index % 2 === 0 ? "00" : "30"
      }`,
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeAlert = () => {
    console.log("");
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        <NotificationsNone />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#ffffff" }}>
          通知時間設定
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "#ffffff", padding: 5 }}>
          <Autocomplete
            options={timeSlots}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="通知時間" />}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#ffffff" }}>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button color="error" onClick={handleChangeAlert} variant="outlined">
            変更
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
