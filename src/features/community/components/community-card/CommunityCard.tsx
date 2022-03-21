import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ChevronRight, FavoriteBorder } from "@mui/icons-material";

const CommunityCard = ({ name, image, location }: any) => {
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
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CommunityCard;
