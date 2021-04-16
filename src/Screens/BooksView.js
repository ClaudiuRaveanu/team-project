import React from 'react';
import {Grid, Typography, Paper, Box, Toolbar, AppBar, ThemeProvider, createMuiTheme, List, ListItem, Tooltip} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export default function BooksView() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const useStyles = makeStyles({
        root: {
            maxWidth: 270,
            margin: '0.9vw',
        },
        media: {
            height: 0,
            paddingTop: '130%',
            objectFit: 'cover',
        },
        body: {
            alignSelf: 'end',
            textAlign: 'center',
            justifyContent: 'center',
        },
        actions: {
            display: 'flex',
            justifyContent: 'center',
        },
        customWidth: {
            maxWidth: 500,
          },
    });

    const classes = useStyles();
    
    return (
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/signin" style={btnStyle}>Intră în cont</Button>
                        <Typography variant='h6' style={container}>Biblioteca de la colț de Rai</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Paper style={{padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex', overflow:'auto', maxWidth:'100%' }} elevation={0}>

                <List>

                    <ListItem>
                <Grid container direction="row" justify="space-around" alignItems="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/2Dcezbo.png" title="Selector Infected WIXOSS"></CardMedia>
                        <CardContent>
                            <Typography noWrap gutterBottom variant='body1' component="h2">
                                Selector Infected WIXOSS
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                Primul sezon al seriei WIXOSS.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.actions} size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button className={classes.actions} size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/DOmWuWK.jpg" title="Selector Spread WIXOSS"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Selector Spread WIXOSS
                            </Typography>

                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                Al doilea sezon al seriei WIXOSS. Plus un text extrem de lung care s-ar putea să nu apară cu totul în card, dar apare în tooltip. Sper...
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/pHghMrP.jpg" title="Vivy: Fluorite Eye's Song"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Vivy: Fluorite Eye's Song
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                IA-urile atacă omenirea.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/XnPa0Jv.jpg" title="Shadows House"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Shadows House
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                Bun venit în casa Shadows.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>
                </ListItem>

                <ListItem>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/TICz9WM.jpg" title="Re:Zero Kara Hajimeru Isekai Keitatsu"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Re:Zero Kara Hajimeru Isekai Keitatsu
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                Tragedie după tragedie.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/yuTGE4h.jpg" title="Urasekai Picnic"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Urasekai Picnic
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                O lume paralelă cu posibilități infinite.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/pdRtnlh.jpg" title="Akuma no Riddle"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Akuma no Riddle
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                O clasă plină cu asasini.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/bEvhZ1l.jpg" title="Date A Bullet"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Date A Bullet
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                Trage și nu privi înapoi.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">Detalii</Button>
                        <Button size="small" color="primary" variant="outlined">Adaugă în wishlist</Button>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                </List>

            </Paper>

        </Grid>
    );
}
