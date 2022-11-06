import React from 'react';
import './Adoption.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BullDog from '../Resources/bulldog1.jpg';
import Corgi from '../Resources/Corgi1.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Adoption = () => {
    return (
        <Container id="container" maxWidth="false">
            <Grid id="grid" container spacing={1}>

                <Grid item xs={12}>

                    <Item id="item">
                        <h3><b>Cat Section</b></h3>

                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia id="pet-img"
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={BullDog}
                            />
                            <CardContent>
                                <label>Pet</label>
                                <p>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">buy</Button>
                            </CardActions>
                        </Card>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia id="pet-img"
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={BullDog}
                            />
                            <CardContent>
                                <label>Pet</label>
                                <p>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">buy</Button>
                            </CardActions>
                        </Card>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia id="pet-img"
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={BullDog}
                            />
                            <CardContent>
                                <label>Pet</label>
                                <p>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">buy</Button>
                            </CardActions>
                        </Card>

                        <h3><b>Dog Section</b></h3>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={Corgi}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pet
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia id="pet-img"
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={BullDog}
                            />
                            <CardContent>
                                <label>Pet</label>
                                <p>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">buy</Button>
                            </CardActions>
                        </Card>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia id="pet-img"
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={BullDog}
                            />
                            <CardContent>
                                <label>Pet</label>
                                <p>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </p>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">buy</Button>
                            </CardActions>
                        </Card>
                        <h3><b>Bird Section</b></h3>
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="Corgi1"
                                height="140"
                                image={Corgi}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pet
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>




                    </Item>
                </Grid>

            </Grid>
        </Container>


    );
};

export default Adoption;