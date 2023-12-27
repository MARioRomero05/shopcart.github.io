import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CardBagPop = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} color="secondary">
        <CardMedia
          sx={{ height: 140 }}
          image="/src/assets/pops.png"
          title="bolsa"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Bolsa de Pochoclos
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $2300
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1 Bolsa de pochoclos 
          </Typography>
        </CardContent>
        <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart" size="medium">
              <AddShoppingCartIcon />
            </IconButton>
          <Button size="Medium" variant="outlined" color="error">-</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardBagPop;