import { Box, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomButton from "../components/Button";
import { useState } from "react";

export default function Topic() {
  const [topic, setTopic] = useState("");

  const onChangeTopic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleClick = () => {
    alert("実装予定: トピック登録");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2} alignItems="center" width="50%">
          <Grid size="grow">
            <TextField
              variant="outlined"
              placeholder="トピックを入力してください"
              fullWidth
              onChange={onChangeTopic}
            />
          </Grid>
          <Grid size="auto">
            <CustomButton
              label="設定"
              onClick={handleClick}
              disabled={!topic}
            />
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid size={6} mt={4}>
          <Typography variant="subtitle1">
            登録したトピックのニュース記事を取得！
          </Typography>
          <Box height={400} width="100%" sx={{ backgroundColor: "divider" }}>
            画像を差し込む
          </Box>
        </Grid>
        <Grid size={6} mt={4}>
          <Typography variant="subtitle1">Slackに新着記事が届きます</Typography>
          <Box height={400} width="100%" sx={{ backgroundColor: "divider" }}>
            画像を差し込む
          </Box>
        </Grid>
      </Grid>
      <Typography>{topic}</Typography>
    </Container>
  );
}
