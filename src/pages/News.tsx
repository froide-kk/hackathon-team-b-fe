import { Search, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NewsList from "../components/NewsList";
import { news, newsNotificationHistory } from "../utils/example";

export type NewsType = (typeof news)[0];

export default function News() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 8 }}>
      {/* ページヘッダー */}
      <Box py={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={2}
        >
          <Typography variant="subtitle1">ニュース</Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ paddingX: "16px", paddingY: "6" }}
            onClick={handleClickOpen}
          >
            トピック設定
          </Button>
        </Stack>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle sx={{ backgroundColor: "#ffffff" }}>
            トピック管理
          </DialogTitle>
          <DialogContent dividers sx={{ backgroundColor: "#ffffff" }}>
            <DialogContentText sx={{ mx: 3, my: 6 }}>
              <TextField
                placeholder="トピックを入力してください"
                sx={{ width: "100%", pt: "50" }}
                fullWidth
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#ffffff", pr: 3, gap: 2 }}>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button type="submit" onClick={handleSubmit} variant="contained">
              保存
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* タブ */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="一覧" icon={<Search />} iconPosition="start" value={0} />
          <Tab
            label="通知履歴"
            icon={<Send />}
            iconPosition="start"
            value={1}
          />
        </Tabs>
      </Box>
      {/* 一覧 */}
      {tab === 0 && <NewsList news={news} page={null} />}
      {/* 通知一覧 */}
      {tab === 1 && <NewsList news={newsNotificationHistory} page={null} />}
    </Container>
  );
}
