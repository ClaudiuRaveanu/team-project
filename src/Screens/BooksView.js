import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default function BooksView() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const useStyles = makeStyles({
        root: {
            maxWidth: "12vw",
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
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acas??</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaug?? carte</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezerv?? o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Paper style={{padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex', overflow:'auto', maxWidth:'100%' }} elevation={0}>

                <List>

                <ListItem>

                <Grid container direction="row" justify="space-around" alignItems="center">
                <Card className={classes.root} to="/add-book">
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/8zpua4U.jpg" title="2062. Lumea creata de inteligenta artificiala"></CardMedia>
                        <CardContent>
                            <Typography noWrap gutterBottom variant='body1' component="h2">
                                2062. Lumea creata de inteligenta artificiala
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            2062 este anul in care vom avea roboti la fel de inteligenti ca noi. Acest lucru este sustinut de majoritatea expertilor in domeniile inteligentei artificiale si roboticii. Dar cum va arata acest viitor? Cum se va desfasura viata pe aceasta planeta? Profesorul Toby Walsh analizeaza impactul pe care inteligenta artificiala il va avea asupra muncii, razboiului, politicii, economiei, vietii cotidiene si mortii. Pe baza unei intelegeri profunde a tehnologiei si a implicatiilor acesteia, 2062 descrie alegerile pe care trebuie sa le facem astazi, pentru a ne asigura ca viitorul va ramane luminos.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/cf7HsZL.jpg" title="Politicile naturii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Politicile naturii
                            </Typography>

                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Identific??nd, ??nc?? din 1999, prin cartea de fa????, Politicile naturii, faptul c?? ??tiin??ele care ar trebui re-asociate politicii pentru a cre??te gradul, dac?? nu chiar nivelul de democra??ie al acesteia,
ar trebui s?? aib?? ca obiect ???ultim??? ???muta??ia climatic?????, degradarea continu?? a condi??iilor de perpetuare a vie??ii pe Terra, ??i continu??nd, sau concentr??ndu-??i reflec??ia ??i ac??iunea, crea??ia, acum, dup?? dou??zeci de ani, tocmai pe aceast?? linie (pe care am putea-o numi, pe urmele lui Jacques Derrida, a ???ospitalit????ii absolute???), centr??nd, altfel spus, ca ???r??u prim??? absolut, at??t ??tiin??a democratizat??, c??t ??i politica devenit?? ??tiin??ific?? tocmai prin ???logodirea??? ei cu o ??tiin???? democratizat?? ???procedural???, deschis?? (spre multiplicitatea ??i diversitatea cunoa??terilor), pe ???muta??ia climatic?????, Latour vorbe??te din ??ns????i inima actualit????ii. ??i o face propun??ndu-ne nu s?? vis??m s?? ???decol??m??? spre alte lumi (pe Marte, acum, e ??nghesuial?? de ???rovere???), ci s?? ???reateriz??m??? pe P??m??nt, s?? redevenim ???p??m??nteni??? ??i ???tere??tri???, deschiz??ndu-ne spre Cosmos, dar dinspre P??m??nt ??i, mai ales, pe P??m??nt, spre biodiversitatea cu adev??rat cosmic??, dar at??t de fragil??, infim??, pe care via??a-??mpreun?? continu??, tocmai, neobosit, s-o produc??. Lumea ??ns????i a devenit, ??n momentul de fa????, prin pluralitatea ei vie, latourian??.
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/0iyqOvH.jpg" title="Platon"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Platon
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Opera integral?? este un proiect sus??inut de Funda??ia ???Republica Literelor??? ??i Editura Humanitas. N??scut la Atena ??n 427 ??.Cr, ??ntr-o familie de vaz??, PLATON p??rea menit s?? se implice ??n politic??. De altfel, unchii s??i, Critias ??i Charmides, ??l invitaser?? s?? li se al??ture la guvernarea lor tiranic??, care urmase capitul??rii Atenei ??naintea Spartei, ??n 404. ??nt??lnirea cu Socrate, al c??rui discipol devenise deja de c????iva ani, i-a schimbat ??ns?? complet destinul. Dar ??n 399 Socrate e condamnat la moarte de democra??ia recent restaurat?? pentru delict de opinie: ar fi introdus ??n cetate zei noi ??i ar fi corupt tineretul. Platon se expatriaz?? pentru mai mul??i ani: c??l??tore??te la Megara, apoi la Cyrene, ??n Egipt ??i, ??n fine, la Siracuza, ??n Sicilia. Aici intr?? ??n conflict cu tiranul Dionysios cel B??tr??n ??i e expulzat for??at.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/tTQhvab.jpg" title="Abilitatea de a citi"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Abilitatea de a citi
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Lucrarea detaliaz?? componentele abilit????ii de a citi, modul ??n care se dezvolt?? aceasta, dificult????ile ??nt??mpinate de anumi??i cititori, precum ??i sugestii de interven??ie.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                <ListItem>
                    
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/tnFbeAq.jpg" title="O plimbare prin Univers"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            O plimbare prin Univers
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Astronomul Adrian ??onka ????i invit?? cititorii de toate v??rstele la o plimbare de-a lungul ??i de-a latul Universului cunoscut.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/b6yHf6V.jpg" title="Raspunsuri scurte la marile intrebari"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Raspunsuri scurte la marile intrebari
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Exist?? Dumnezeu? Cum a ??nceput totul? Putem prezice viitorul? E posibil?? c??l??toria ??n timp? Ar trebui s?? coloniz??m spa??iul? Ne va dep????i inteligen??a artificial??? Aceast?? carte ??i r??spunsurile pe care ni le ofer?? reprezint?? ultima m??rturie a uneia dintre cele mai str??lucite min??i.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/SEFPE3T.jpg" title="Extraterestrii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Extraterestrii
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Exist?? extratere??tri? Dac?? ar exista, cum ar ar??ta? Cum ar ??n??elege ei lumea? Ce ar ??nsemna s?? intr??m ??n contact cu ei?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/9lvzdnT.jpg" title="Calatorie pe valuri de galaxii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Calatorie pe valuri de galaxii
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Cosmografii, cei care alc??tuiesc h??r??ile cosmosului, sunt adev??ra??ii exploratori ai zilelor noastre. Ei studiaz?? structura universului, na??terea ??i evolu??ia galaxiilor, iar pe aceast?? cale a fost ob??inut?? ??n 2014 prima hart?? dinamic?? a universului, cu zone vide ??i cu imense ???continente??? extragalactice.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                </List>

            </Paper>

            <Fab style={{ margin:0, top:'auto', right:30, bottom:30, left:'auto', position:'fixed' }} color="primary" href="/wishlist"><ShoppingCart /></Fab>

        </Grid>
    );
}