import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Kaartje extends React.Component {
  render() {

  return (
    <div>
      <Card variant="outlined" className="homepagecard">
        <CardContent>
          <Typography classname="cardtitle" color="textSecondary" gutterBottom>
            23 November 2020
          </Typography>
          <Typography variant="h4" component="h2">
            14:30
          </Typography>
          <Typography color="textSecondary">
            Martijn Creusen<br></br>Joep van Antwerpen
          </Typography>
        </CardContent>
        <CardActions className="cardaction">
          <Button size="small" className="cardactionbutton">I'm joining you!</Button>
        </CardActions>
      </Card>
      <Card variant="outlined" className="homepagecard2">
        <CardContent>
          <Typography classname="cardtitle" color="textSecondary" gutterBottom>
            24 November 2020
          </Typography>
          <Typography variant="h4" component="h2">
            16:00
          </Typography>
          <Typography color="textSecondary">
            Joep van Antwerpen<br></br>Max Schuurmans<br></br>Roy de Bie
          </Typography>
        </CardContent>
        <CardActions className="cardaction">
          <Button size="small" className="cardactionbutton">I'm joining you!</Button>
        </CardActions>
      </Card>
    </div>
  )};
}

export default Kaartje;