import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CardComb = () => {
  return (
    <>
      <div className="comb">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/src/assets/A000000097.png"
            title="combo mega"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Combo Mega
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $7200
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Balde de pochoclos + 2 Gaseosas + 1 Golosina
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart" size="medium">
              <AddShoppingCartIcon />
            </IconButton>
            <Button size="Medium" variant="outlined" color="error">-</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default CardComb;
