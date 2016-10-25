import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGrey500, grey400, grey50 } from 'material-ui/styles/colors';
const headshot = require('../images/headshot.png');

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blueGrey500,
  },
});

const styles = {
  card: {
    width: 350,
  },
  cards: {
    backgroundColor: '#A0B1B9',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: 30,
  },
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "'Roboto', sans-serif",
  },
  landing: {
    background: "url('https://static.wixstatic.com/media/1c692c_aca72c9db50942ada0f7f0a816bcb5f2.jpg/v1/fill/w_2054,h_615,al_c,q_90,usm_0.66_1.00_0.01/1c692c_aca72c9db50942ada0f7f0a816bcb5f2.jpg') center no-repeat",
    backgroundSize: 'cover',
    color: 'white',
    paddingTop: 150,
    paddingBottom: 15,
  },
  icon: {
    fontSize: 36,
    padding: 5,
  },
  resume: {
    color: 'white',
    textDecoration: 'none',
  },
  text: {
    fontSize: 30,
  },
};

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <div style={styles.landing}>
          <Avatar src={headshot} size={100} />
          <p style={styles.text}>Johanna Perez</p>
          <a href="https://github.com/johanna08" target="_blank">
            <FontIcon
              className="fa fa-github"
              style={styles.icon}
              color={grey50}
              hoverColor={grey400}
            /></a>
          <a href="https://www.linkedin.com/in/johanna-perez-08894699" target="_blank">
            <FontIcon
              className="fa fa-linkedin"
              style={styles.icon}
              color={grey50}
              hoverColor={grey400}
            /></a>
          <p><a style={styles.resume} href="https://drive.google.com/file/d/0B9XSSlypjssmMTNvcFBtUW5JY2M/view?usp=sharing" target="_blank">Resume</a></p>
        </div>
        <p style={styles.portfolio}>Portfolio</p>
        <div style={styles.cards}>
          <Card style={styles.card}>
            <CardTitle title="dish'd" subtitle="A Meal Planning App" />
            <CardMedia>
              <img src={require('../images/dishd.png')} />
            </CardMedia>
            <CardText>
              Cook delicious food at home with dish'd.
            </CardText>
            <CardActions>
              <a href="http://www.dishd.us" target="_blank"><FlatButton label="LiveSite" /></a>
              <a href="https://github.com/johanna08/Dish-d" target="_blank"><FlatButton label="Github" /></a>
            </CardActions>
          </Card>

          <Card style={styles.card}>
            <CardTitle title="SelfSee" subtitle="A React Native iOS app" />
            <CardMedia>
              <img src={require('../images/selfsee.png')} />
            </CardMedia>
            <CardText>
              Take a selfie and see how you really feel.
            </CardText>
            <CardActions>
              <a href="https://github.com/johanna08/SelfSee-Mobile" target="_blank"><FlatButton label="Github" /></a>
            </CardActions>
          </Card>

          <Card style={styles.card}>
            <CardTitle title="Pasture to Pantry" subtitle="A faux e-commerce site" />
            <CardMedia>
              <img src={require('../images/ptp.png')} />
            </CardMedia>
            <CardText>
              Organic foods for delivery from local farmers.
            </CardText>
            <CardActions>
              <a href="https://pasturetopantry.herokuapp.com" target="_blank"><FlatButton label="LiveSite" /></a>
              <a href="https://github.com/johanna08/pasturetopantry" target="_blank"><FlatButton label="Github" /></a>
            </CardActions>
          </Card>

          <Card style={styles.card}>
            <CardTitle title="CONDOR" subtitle="A Shopify e-commerce site" />
            <CardMedia>
              <img src={require('../images/condor.png')} />
            </CardMedia>
            <CardText>
              Bespoke fashion from CONDOR.
            </CardText>
            <CardActions>
              <a href="http://shopcondor.myshopify.com" target="_blank"><FlatButton label="LiveSite" /></a>
            </CardActions>
          </Card>

          <Card style={styles.card}>
            <CardTitle title="Dana At The Table" subtitle="A food stylist website" />
            <CardMedia>
              <img src={require('../images/datt.png')} />
            </CardMedia>
            <CardText>
              Portfolio site for a food stylist.
            </CardText>
            <CardActions>
              <a href="http://johanna08.github.io/DanaAtTheTable/index.html" target="_blank"><FlatButton label="LiveSite" /></a>
              <a href="https://github.com/johanna08/DanaAtTheTable" target="_blank"><FlatButton label="Github" /></a>
            </CardActions>
          </Card>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
export default App;
