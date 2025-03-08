import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../components/Button";

export default function Login() {
  const handleClick = () => {
    alert("Slack APIへ");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 8,
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box mt={8}>
        <Typography variant="h1">好きな情報だけ、最速でキャッチ</Typography>
        <Typography variant="subtitle1">
          推しのニュースも、気になるトピックも、見逃さない。
        </Typography>
        <Typography>
          このアプリは、あなたが設定した「好き」に関する最新情報を自動で収集し、Slackへリアルタイムで通知。
          <br />
          もう、SNSを何度もチェックする必要はありません。仕事中でも、移動中でも、大事なニュースを逃さずキャッチできます。
          <br />
          今すぐログインして、自分だけの情報フィルターを作ろう！
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
      >
        <CustomButton
          label="Slack で oshiel を始める"
          sx={{ my: 4, height: "auto" }}
          onClick={handleClick}
        />
        <Box
          height={500}
          width="70%"
          sx={{ mt: 4, backgroundColor: "divider" }}
        >
          画像を差し込む
        </Box>
      </Box>
    </Container>
  );
}
