import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ChevronRight, Favorite, FavoriteBorder } from "@mui/icons-material";
import CommunityService from "../../../../core/services/community-service/community-service";
import { useEffect, useState } from "react";

const CommunityCard = ({ id, name, image, location }: any) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const communityService = CommunityService.getInstance();

  useEffect(() => {
    communityService?.isFavourite(id).then((result) => setIsFavourite(result));
  }, [communityService, id]);

  return (
    <Box mb="1rem">
      <Card sx={{ minWidth: 275 }}>
        <CardMedia component="img" alt={name} image={image} />
        <CardContent>
          <Typography variant="h2" color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          {isFavourite ? (
            <IconButton
              onClick={() => {
                setIsFavourite(false);
                communityService?.removeFromFavourite(id);
              }}
            >
              <Favorite />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setIsFavourite(true);
                communityService?.addToFavourite(id);
              }}
            >
              <FavoriteBorder />
            </IconButton>
          )}
          <IconButton>
            <ChevronRight />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CommunityCard;
