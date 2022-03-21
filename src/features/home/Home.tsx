import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommunityService from "../../core/services/community-service/community-service";
import { MyDocNews } from "../../core/models/my-doc/MyDocNews";
import NewsCard from "./components/news-card/NewsCard";

const Home = () => {
  // how many skeleton cards will be rendered, if page is loading
  const SKELETON_NEWS_AMOUNT = 3;

  const [news, setNews] = useState<MyDocNews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockIds = [
      "b22c3ba0-99e1-11eb-9c65-64652e69642d",
      "ca718dfc-c509-11eb-b6b9-64652e69642d",
      "f8484114-5779-11ec-b3ad-64652e69642d",
      "00051148-dc2e-11e3-9aea-5b61b214e2c0",
    ];
    CommunityService.getInstance()
      ?.getNews(mockIds)
      .then((response) => response.json())
      .then((data: MyDocNews[]) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Box py={"3.5rem"}>
      {isLoading && <LinearProgress />}
      <Box px="1rem" py={"1rem"}>
        <Typography variant="h2" color="primary">
          Hallo,
        </Typography>
        <Typography variant="h1" color="text.primary">
          Dominique!
        </Typography>
      </Box>
      <Box px="1rem" py="1rem">
        {isLoading &&
          [...Array(SKELETON_NEWS_AMOUNT)].map((v, index) => (
            <NewsCard key={index} isLoading={true} />
          ))}
        {news.map((news) => (
          <NewsCard
            key={news.slug}
            title={news.name}
            text={news.content}
            createdAt={news.created_at}
            image={news.url_picture}
            isLoading={isLoading}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
