import { Box, Stack } from "@mui/material";
import { NewsType } from "../pages/News";
import NewsCard from "./NewsCard";

type NewsListProps = {
  news: NewsType[];
  page: string | null;
};

export default function NewsList({ news, page }: NewsListProps) {
  const addFavorite = (item: NewsType) => {
    console.log("お気に入り追加:", item);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2} sx={{ margin: "0 auto" }}>
        <Box display="flex" gap={2} flexWrap="wrap">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              newsItem={item}
              onFavorite={addFavorite}
              page={page}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
