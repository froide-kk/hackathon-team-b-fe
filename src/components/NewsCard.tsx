import { useState } from "react";
import { Favorite, Link } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  Divider,
  CardContent,
  Stack,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { NewsType } from "../pages/News";

type NewsCardProps = {
  newsItem: NewsType;
  onFavorite: (item: NewsType) => void;
  page: string | null;
};

export default function NewsCard({
  newsItem,
  onFavorite,
  page,
}: NewsCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
    onFavorite(newsItem); // お気に入りボタンを押したニュースを渡す
  };

  return (
    <Card key={newsItem.id} sx={{ width: "32%" }}>
      <CardMedia
        component="img"
        src={newsItem.urlToImage}
        height="140px"
        sx={{ justifyItems: "center" }}
      />
      <Divider />
      <CardContent sx={{ backgroundColor: "#ffffff", height: "140px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" justifyContent="start">
            <Typography variant="caption">{newsItem.source.name}</Typography>
            <Typography variant="caption">{newsItem.publishedAt}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="end">
            <Button
              component="a"
              href={newsItem.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0 }}
            >
              <Link />
            </Button>
            {page === "Bookmark" ? (
              <></>
            ) : (
              <Button onClick={handleFavoriteClick}>
                <Favorite color={isFavorited ? "error" : "action"} />
              </Button>
            )}
          </Stack>
        </Stack>
        <Box>
          <Typography variant="h6">
            {newsItem.title.length > 20
              ? newsItem.title.substring(0, 20) + "..."
              : newsItem.title}
          </Typography>
          <Typography variant="caption">
            {newsItem.description.length > 200
              ? newsItem.description.substring(0, 200) + "..."
              : newsItem.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
