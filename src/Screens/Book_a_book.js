import React from 'react';
import { Paper, Box, Button, Typography, AppBar, Toolbar, Grid, TextField, Link, FormControlLabel, makeStyles, CardActionArea } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export default function Book_a_book() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const paper2 = { padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'}
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    const useStyles = makeStyles({
        root: {
            maxWidth: 270,
            margin: '0vw',
        },
        media: {
            height: 0,
            width: 'auto',
            paddingTop: '143%',
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
    });

    const classes = useStyles();

    return (
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/">Acasă</Button>
                        <Button href="/signin" style={btnStyle}>Intră în cont</Button>
                        <Typography variant='h6' display='block' style={container}>Biblioteca de la colț de Rai</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button href="/view-books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper elevation={5} style={paper2}>
                <Grid align="center" style={{ marginBottom:40 }}>
                    <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Rezervă o carte</Link>
                </Grid>
                <form>
                    <Paper elevation={0} style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}}>

                        <Paper style={paper3} elevation={0}>
                        <Autocomplete 
                            id="combo-box-demo"
                            disableClearable
                            options={['Option 1','Option 2']}
                            style={{ width:'75%', marginBottom:'30px' }}
                            renderInput={(params) => <TextField {...params} label="Alege o carte" variant="outlined" />}>
                        </Autocomplete>
                        <Grid align="left" style={{ marginBottom:30 }}>
                            <TextField InputProps={{readOnly:true,}} label='Editură' defaultValue='Editură' variant='outlined' style={{ width:'30%' }}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, width:'50%' }}>
                            <TextField InputProps={{readOnly:true,}} label='Autor' defaultValue='Autor' variant='outlined'></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'75%' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            rows={4}
                            defaultValue="Descriere carte"
                            variant="outlined"
                            style={{ width:'150%' }}
                        />
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex' }} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root}>
                                    <CardMedia className={classes.media} image="https://i.imgur.com/pHghMrP.jpg"></CardMedia>
                                </Card>
                            </Grid>
                        </Paper>

                    </Paper>
                    <Grid align="center" style={{ marginTop:30, marginBottom:0 }}>
                        <Button style={{ width:'35%', background: '#3f51b5', color: '#FFFFFF'}}>Rezervă cartea</Button>
                    </Grid>
                </form>
                <Grid></Grid>
            </Paper>
        </Grid>
    );
}