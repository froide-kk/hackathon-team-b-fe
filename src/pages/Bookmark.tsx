import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import NewsList from "../components/NewsList";
import { news } from "../utils/example";

export default function Bookmark() {
  return (
    <Container maxWidth="xl" sx={{ pt: 8 }}>
      <Box pt={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="subtitle1">お気に入り</Typography>
        </Stack>
      </Box>
      <Divider />
      <NewsList news={news} page="Bookmark" />
    </Container>
  );
}
