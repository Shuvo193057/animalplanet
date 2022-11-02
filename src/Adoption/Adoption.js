import React from 'react';
import './Adoption.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Adoption = () => {
    return (
        <Container id="container" maxWidth="false">
            <Grid id="grid" container spacing={1}>
             
                <Grid item xs={12}>
                
                    <Item id="item">
                    <h3>Cat Section</h3>
                    
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                    <Item id="item">
                    <h3>Cat Section</h3>
                    
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                         <Item id="item">
                    <h3>Cat Section</h3>
                    
                        <Card id="card" sx={{ maxWidth: 345 }}>
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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
                            {/* <CardMedia
                    component="img"
                    alt="Corgi1"
                    height="140"
                    image="../Resources/Corgi1.jpg"
                />
                */}
                            <img src="../Resources/bulldog1.jpg" alt=" "></img>
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