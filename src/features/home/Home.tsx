import { Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommunityService from "../../core/services/community-service/community-service";
import { MyDocNews } from "../../core/models/my-doc/MyDocNews";
import NewsCard from "./components/NewsCard/NewsCard";
import { ReactComponent as EmptyIcon } from "./../../assets/icons/favourite.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // how many skeleton cards will be rendered, if page is loading
  const SKELETON_NEWS_AMOUNT = 3;

  const [news, setNews] = useState<MyDocNews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const communityService = CommunityService.getInstance();
  const navigate = useNavigate();

  useEffect(() => {
    communityService?.getFavourites().then((favourites) => {
      if (favourites.value) {
        CommunityService.getInstance()
          ?.getNews(JSON.parse(favourites.value))
          .then((response: any) => response.json())
          .then((data: MyDocNews[]) => {
            setNews(data);
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
        setNews([]);
      }
    });
  }, [communityService]);

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
        {!isLoading && news.length === 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              textAlign: "center",
            }}
          >
            <EmptyIcon style={{ width: "50%", height: "50%" }} />
            <Typography variant="h1" sx={{ marginBottom: "1rem" }}>
              Keine Neuigkeiten
            </Typography>
            <Typography variant="h3">
              Derzeit scheint es keine Neuigkeiten aus deinen Communites zu
              geben.
            </Typography>
            <Button
              sx={{ marginTop: "1rem" }}
              onClick={() => navigate("/community")}
              variant="contained"
            >
              Zur Community
            </Button>
          </Box>
        )}
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
            isLoading={false}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
