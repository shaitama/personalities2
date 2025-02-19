import { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Avatar, Box } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export const avengerList = [
  {
    "name": "Captain America",
    "description": "Steve Rogers, enhanced by the Super Soldier Serum, becomes Captain America, wielding his indestructible shield and fighting for freedom and justice. He is one of the most prominent leaders in the Avengers team, constantly fighting for peace and the greater good. His shield is a symbol of courage and hope.",
    "url": "https://m.media-amazon.com/images/I/91K1WF5yPtL.jpg",
    "alt": "Captain America"
  },
  {
    "name": "Thor",
    "description": "The Asgardian God of Thunder, Thor, wields the enchanted hammer Mjolnir, allowing him to control lightning, fly, and possess immense strength. Thor is a true warrior who fights for justice and the safety of the Nine Realms. With his powerful hammer, he can summon storms and defeat his enemies with a single blow.",
    "url": "https://images5.alphacoders.com/632/632728.jpg",
    "alt": "Thor"
  },
  {
    "name": "Hulk",
    "description": "Dr. Bruce Banner transforms into the Hulk, a massive powerhouse with incredible strength and durability, making him one of the Avengers' most formidable members. His anger amplifies his powers, allowing him to smash through nearly anything. Despite his destructive side, the Hulk is a hero who fights for justice and to protect the innocent.",
    "url": "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/e/p/8/large-newposter8463-movie-rise-of-the-planet-of-the-apes-hd-original-imaf5tgkywb3ys9x.jpeg?q=90&crop=false",
    "alt": "Hulk"
  }
];

const ExpandMore = styled((props: { expand: boolean, onClick: () => void }) => {
  const { expand, onClick } = props;
  return (
    <IconButton onClick={onClick} aria-expanded={expand} aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  );
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: 'rotate(0deg)',
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const avenger = avengerList[index];

  const handleBackClick = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : avengerList.length - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex < avengerList.length - 1 ? prevIndex + 1 : 0));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
    >
      <Box width="100%" maxWidth={600} padding={2}>
        <Typography variant="h4" gutterBottom align="center">
          Avengers
        </Typography>
        <Card className="avenger-card">
          <CardHeader
            avatar={<Avatar>FS</Avatar>}
            title={<Typography>Frunez Shyna D. Cayanan</Typography>}
            subheader={<Typography variant="body2">C-PEITEL3</Typography>}
          />
          <CardMedia
            component="img"
            height="350"
            image={avenger.url}
            alt={avenger.alt}
          />
          <CardContent>
            <Typography variant="h4">
              {avenger.name}
            </Typography>
            <Typography className="avenger-number" variant="body1">
              Avenger {index + 1} of {avengerList.length}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary" className="show-details-text">
                {expanded ? 'Hide' : 'Show'} details
              </Typography>
              <ExpandMore expand={expanded} onClick={handleExpandClick} />
            </Box>
          </CardContent>
          <CardActions disableSpacing>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">
                  {avenger.description}
                </Typography>
              </CardContent>
            </Collapse>
          </CardActions>
        </Card>
        <Box display="flex" justifyContent="center" gap={3} marginTop={2}>
          <IconButton
            className="nav-button"
            onClick={handleBackClick}
            aria-label="back"
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            className="nav-button"
            onClick={handleNextClick}
            aria-label="next"
          >
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
