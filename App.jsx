import { useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue";
import Cart from "./components/Cart";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function App() {
  //variables para establecer precios de productos y contadores de productos
  const [tot, setTot] = useState(0);
  const comb = 7200;
  const [countCom, setCountCom] = useState(0);
  const bucket = 2600;
  const [countBuc, setCountBuc] = useState(0);
  const bag = 2300;
  const [countBag, setCountBag] = useState(0);
  const soda = 2500;
  const [countSod, setCountSod] = useState(0);
  const water = 1250;
  const [countWat, setCountWat] = useState(0);
  const flavw = 1500;
  const [countFla, setCountFla] = useState(0);
  const nachos = 3300;
  const [countNac, setCountNac] = useState(0);
  const choco = 3750;
  const [countCho, setCountCho] = useState(0);
  const gummy = 3700;
  const [countGum, setCountGum] = useState(0);
  //Variables para almacenar datos del form
  const [dni, setDNI] = useState('');
  let dniv;
  const [naci, setNaci] = useState('0');
  let nacv;
  const [card, setCard] = useState('0');
  let cardv;
  const [venc, setVenc] = useState('0');
  let vencvl;
  let vencn;
  let vencv;
  const ref = 1224;
  const [cod, setCod] = useState('0');
  let codv;

  const [banc, setBanc] = React.useState("");
  const handleChange = (event) => {
    setBanc(event.target.value);
  };

  //Funcion de MuiMaterials para personalizar las etiquetas TextField
  const CssTextField = styled(TextField)({
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "#a26c24",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f0b05b",
      },
      "&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
        color: "white",
      },
    },
  });

  //Funciones para agregar y quitar productos a la cantidad y a la vez calcular el total del carrito,
  //con un condicional para no permitir que se resten productos teniendo la cantidad de 0 agregados
  const addComb = () => {
    setTot((tot) => tot + comb);
    setCountCom((countCom) => countCom + 1);
    document.getElementById("combo").disabled = false;
  };
  const quitComb = () => {
    if (countCom == 0) {
      document.getElementById("combo").disabled = true;
    } else {
      setTot((tot) => tot - comb);
      setCountCom((countCom) => countCom - 1);
    }
  };

  const addBucket = () => {
    setTot((tot) => tot + bucket);
    setCountBuc((countBuc) => countBuc + 1);
    document.getElementById("balde").disabled = false;
  };
  const quitBucket = () => {
    if (countBuc == 0) {
      document.getElementById("balde").disabled = true;
    } else {
      setTot((tot) => tot - bucket);
      setCountBuc((countBuc) => countBuc - 1);
    }
  };

  const addBag = () => {
    setTot((tot) => tot + bag);
    setCountBag((countBag) => countBag + 1);
    document.getElementById("bolsa").disabled = false;
  };
  const quitBag = () => {
    if (countBag == 0) {
      document.getElementById("bolsa").disabled = true;
    } else {
      setTot((tot) => tot - bag);
      setCountBag((countBag) => countBag - 1);
    }
  };

  const addSoda = () => {
    setTot((tot) => tot + soda);
    setCountSod((countSod) => countSod + 1);
    document.getElementById("gaseosa").disabled = false;
  };
  const quitSoda = () => {
    if (countSod == 0) {
      document.getElementById("gaseosa").disabled = true;
    } else {
      setTot((tot) => tot - soda);
      setCountSod((countSod) => countSod - 1);
    }
  };

  const addWater = () => {
    setTot((tot) => tot + water);
    setCountWat((countWat) => countWat + 1);
    document.getElementById("agua").disabled = false;
  };
  const quitWater = () => {
    if (countWat == 0) {
      document.getElementById("agua").disabled = true;
    } else {
      setTot((tot) => tot - water);
      setCountWat((countWat) => countWat - 1);
    }
  };

  const addFlavored = () => {
    setTot((tot) => tot + flavw);
    setCountFla((countFla) => countFla + 1);
    document.getElementById("aguas").disabled = false;
  };
  const quitFlavored = () => {
    if (countFla == 0) {
      document.getElementById("aguas").disabled = true;
    } else {
      setTot((tot) => tot - flavw);
      setCountFla((countFla) => countFla - 1);
    }
  };

  const addNachos = () => {
    setTot((tot) => tot + nachos);
    setCountNac((countNac) => countNac + 1);
    document.getElementById("nachos").disabled = false;
  };
  const quitNachos = () => {
    if (countNac == 0) {
      document.getElementById("nachos").disabled = true;
    } else {
      setTot((tot) => tot - nachos);
      setCountNac((countNac) => countNac - 1);
    }
  };

  const addChoco = () => {
    setTot((tot) => tot + choco);
    setCountCho((countCho) => countCho + 1);
    document.getElementById("choco").disabled = false;
  };
  const quitChoco = () => {
    if (countCho == 0) {
      document.getElementById("choco").disabled = true;
    } else {
      setTot((tot) => tot - choco);
      setCountCho((countCho) => countCho - 1);
    }
  };

  const addGummy = () => {
    setTot((tot) => tot + gummy);
    setCountGum((countGum) => countGum + 1);
    document.getElementById("gomitas").disabled = false;
  };
  const quitGummy = () => {
    if (countGum == 0) {
      document.getElementById("gomitas").disabled = true;
    } else {
      setTot((tot) => tot - gummy);
      setCountGum((countGum) => countGum - 1);
    }
  };

  //Funciones para almacenar el contenido de los input para luego crear la verificacion
  const handleDniChange = (e) => {
    setDNI(e.target.value);
  };

  const handleNacChange = (e) => {
    setNaci(e.target.value);
  };

  const handleCardChange = (e) => {
    setCard(e.target.value);
  };

  const handleVencChange = (e) => {
    setVenc(e.target.value);
  };

  const handleCodChange = (e) => {
    setCod(e.target.value);
  };

  //Funcion para verificar la compra, verificando primero que la cantidad de digitos de dni, fechas, tarjeta y codigo de tarjeta
  //sean los correctos
  const verificar = () => {
    if (dni.length==10) {
      dniv = true
    } else {
      dniv = false
    }
    if (naci.length==8) {
      nacv = true
    } else {
      nacv = false
    }
    if (card.length==16) {
      cardv = true
    } else {
      cardv = false
    }
    if (venc.length==8) {
      vencvl = true
    } else {
      vencvl = false
    }
    vencn = parseInt(venc)
    if (vencn>ref) {
      vencv = true
    } else {
      vencv = false
    }
    if (cod.length==3) {
      codv = true
    } else {
      codv = false
    }

    if (dniv && nacv && cardv && vencv && vencvl && codv) {
      alert('Pago confirmado')
    } else {
      alert('Pago rechazado, verifique los datos')
    }
  }

  return (
    <>
      <h1>Carrito de Compras</h1>
      <div className="carro">
        <div className="catalogo">
          <div className="cardspop">
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
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    size="medium"
                    onClick={addComb}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Button
                    id="combo"
                    size="Medium"
                    variant="outlined"
                    color="error"
                    onClick={quitComb}
                  >
                    -
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className="bucket">
              <Card sx={{ maxWidth: 345 }} color="secondary">
                <CardMedia
                  sx={{ height: 140 }}
                  image="/src/assets/popb.png"
                  title="balde"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Balde de Pochoclos
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    $2600
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    1 Balde de pochoclos
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    size="medium"
                    onClick={addBucket}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Button
                    id="balde"
                    size="Medium"
                    variant="outlined"
                    color="error"
                    onClick={quitBucket}
                  >
                    -
                  </Button>
                </CardActions>
              </Card>
            </div>
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
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addBag}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="bolsa"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitBag}
                >
                  -
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardsdrink">
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/drink.png"
                title="gaseosa"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Gaseosa
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $2500
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Vaso de Gaseosa a elección
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addSoda}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="gaseosa"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitSoda}
                >
                  -
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/w.png"
                title="agua"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Agua
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $1250
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Botella de Agua 600ml
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addWater}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="agua"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitWater}
                >
                  -
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/wd.png"
                title="agua saborizada"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Agua saborizada
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $1500
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Botella de Agua Saborizada 600ml
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addFlavored}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="aguas"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitFlavored}
                >
                  -
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardssnacks">
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/snacks.png"
                title="nachos"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Nachos
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $3300
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nachos con queso
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addNachos}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="nachos"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitNachos}
                >
                  -
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/choco.png"
                title="Chocolates"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Chocolates
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $3750
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Paquete grande de Rocklets
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addChoco}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="choco"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitChoco}
                >
                  -
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} color="secondary">
              <CardMedia
                sx={{ height: 140 }}
                image="/src/assets/gummy.png"
                title="gomitas"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Gomitas
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  $3700
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Paquete de gomitas Mogul
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  size="medium"
                  onClick={addGummy}
                >
                  <AddShoppingCartIcon />
                </IconButton>
                <Button
                  id="gomitas"
                  size="Medium"
                  variant="outlined"
                  color="error"
                  onClick={quitGummy}
                >
                  -
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="detalles">
          <div className="tot">
            <h1>Total</h1>
            <h1>${tot}</h1>
          </div>
          <div className="prod">
            <h3>Productos en el Carrito</h3>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Combo Mega x ({countCom})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Balde de pochoclos x ({countBuc})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Bolsa de pochoclos x ({countBag})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Gaseosa x ({countSod})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Agua x ({countWat})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Agua saborizada x ({countFla})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Nachos x ({countNac})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Chocolates x ({countCho})
            </Typography>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              align="left"
              paddingLeft={2}
            >
              Gomitas x ({countGum})
            </Typography>
          </div>
          <div className="formPago">
            <Box
              color={"primary"}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="pago">
                <div className="clientInfo">
                  <CssTextField
                    label="Nombre y Apellido"
                    id="nya"
                  />
                  <CssTextField type="text" label="DNI" id="dni" onChange={handleDniChange} />
                  <CssTextField
                    label="Fecha Nac."
                    id="fechanac"
                    onChange={handleNacChange}
                  />
                </div>
                <div className="cardNumber">
                  <CssTextField
                    label="N° Tarjeta"
                    placeholder="XXXXXXXXXXXXXXXX"
                    id="numtarj"
                    onChange={handleCardChange}
                  />
                  <Select
                    value={banc}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Entidad</em>
                    </MenuItem>
                    <MenuItem value={"Visa"}>VISA</MenuItem>
                    <MenuItem value={"Master"}>MasterCard</MenuItem>
                  </Select>
                </div>
                <div className="cardVerif">
                  <CssTextField
                    label="Fecha venc."
                    id="fechaven"
                    onChange={handleVencChange}
                  />
                  <CssTextField
                    label="Cod. Seguridad"
                    id="codigo"
                    onChange={handleCodChange}
                    
                  />
                  <Button variant="outlined" color="success" onClick={verificar}>PAGAR</Button>  
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
