import { Box, LinearProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommunityService from "../../core/services/community-service/community-service";
import CommunityCard from "./components/community-card/CommunityCard";
import { MyDocResponse } from "../../core/models/my-doc/MyDocResponse";

const Community = () => {
  const [community, setCommunity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CommunityService.getInstance()
      ?.getCommunity()
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCommunity(data);
      });
  }, []);

  return (
    <Box py={"3.5rem"}>
      {isLoading && <LinearProgress />}
      <Box px="1rem" py="1rem">
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontSize: "1.8rem" }}
        >
          Unsere Community
        </Typography>
        <TextField id="search-community" label="Name" variant="outlined" />
        {community.map((community: MyDocResponse) => {
          return (
            <CommunityCard
              key={community.data.id}
              name={community.data.company}
              image={community.data._image}
              location={community.data.city}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Community;
