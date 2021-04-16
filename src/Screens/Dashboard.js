import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import lightBlue from '@material-ui/core/colors/lightBlue'
import {Grid, Typography, Paper, Box, Toolbar, AppBar, ThemeProvider, createMuiTheme} from '@material-ui/core';
import { getCurrentDate } from '../App';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];
  
    return (
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                        <Button href="/signin" style={btnStyle}>Intră în cont</Button>
                        <Typography variant='h6' display='block' style={container}>Biblioteca de la colț de Rai</Typography>
                        <Button href="/register" style={btnStyle}>Adaugă carte</Button>
                        <Button href="/view-books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper style={boxStyle} elevation={0}>
                <Box style={narrowBox}>
                    <Calendar calendarType='US'/>
                </Box>
            </Paper>
        </Grid>
    );
}
