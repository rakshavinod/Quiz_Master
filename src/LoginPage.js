import HomePage from './HomePage';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <div>
        <HomePage>
<Typography
  component="h1"
  variant="h2"
  align="center"
  color="text.secondary"
  gutterBottom
  pt={0}
>
  Let's Get Started..!!
</Typography>
        <Card sx={{ minWidth: 330 }}>
      <CardContent>
        <div style={{padding:"10px 0px 10px 10px", display:"flex"}}><TextField id="outlined-basic" label="First name" variant="outlined" /></div>
        <div style={{padding:"10px 0px 10px 10px", display:"flex"}}><TextField id="outlined-basic" label="Last name" variant="outlined" /></div>
        <div style={{padding:"10px 0px 10px 10px", display:"flex"}}><TextField id="outlined-basic" label="Email Id" variant="outlined" /></div>
        <div style={{padding:"10px 0px 0px 10px", display:"flex"}}><TextField id="outlined-basic" label="Password" variant="outlined" /></div>

      </CardContent>
      <CardActions>
        <Button size="medium" sx={{ml:"230px", mb:"5px", mr:"5px"}} variant="contained" component={Link} to="/instructions">Submit</Button>
      </CardActions>
    </Card>
        </HomePage>
        </div>
  )
}

export default LoginPage