import React from 'react';
import Button from '@material-ui/core/Button';
import {Grid, Typography, Paper, Toolbar, AppBar, Link } from '@material-ui/core';
// import { getCurrentDate } from '../App';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

export default function Dashboard() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
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
            paddingTop: '150%',
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
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' display='block' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button href="/view-books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
                <Paper style={{ padding: '20px 20px', width: '50vw', margin: '20px auto', flexDirection:'column', display: 'flex' }} elevation={5}>
                    <Grid align="center" style={{ marginBottom:25 }}>
                        <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Bun venit, nume-user!</Link>
                    </Grid>
                    <Paper style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}} elevation={0}>

                        <form>
                        <Paper style={{padding: '0px 0px', width: '100%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>

                            <Grid align='left' style={{ width:'100%', marginBottom:20 }}>
                                <Typography>Astăzi nu aveți nicio carte de predat.</Typography>
                            </Grid>

                            <Grid align="center" style={{ width:'100%', marginBottom:0 }}>
                                <Paper elevation={3} style={{padding:'5px 5px'}}><Typography>Sugestia săptămânii</Typography></Paper>
                                
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia className={classes.media} image="https://i.imgur.com/SEFPE3T.jpg" title="Extraterestrii"></CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="body1" component="h2" noWrap>
                                            Extraterestrii
                                        </Typography>
                                        <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                                            Există extratereștri? Dacă ar exista, cum ar arăta? Cum ar înțelege ei lumea? Ce ar însemna să intrăm în contact cu ei?
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                                            <IconButton aria-label="Adaugă în wishlist" color="primary">
                                                <AddShoppingCart />
                                            </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Paper>
                        </form>
                    </Paper>
                </Paper>
        </Grid>
    );
}
