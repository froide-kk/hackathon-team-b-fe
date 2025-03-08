import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import newsImg from "../assets/oshiel_news.png";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("authId", "dummy-auth-token");
    navigate("/news");
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
          label="oshiel を始める"
          sx={{ my: 4, height: "auto" }}
          onClick={handleClick}
        />
      </Box>
      <Box width="100%" sx={{ mt: 2, p: 2, boxShadow: 2 }}>
        <img src={newsImg} alt="oshiel news list page" width="100%" />
      </Box>
    </Container>
  );
}
