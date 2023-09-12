import React from 'react'
import { Container, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import HomePage from './HomePage';

const WelcomePage = () => {
  return (
    <div>
<HomePage>
<Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 2}}>
<Typography
  component="h1"
  variant="h2"
  align="center"
  color="text.secondary"
  gutterBottom
  pt={0}
>
  Ready to Test Your Knowledge?
</Typography>
<Typography
  component="h2"
  variant="h5"
  align="center"
  color="text.secondary"
  sx={{mr:"115px", ml:"115px"}}
  gutterBottom
  pt={0}
>
 Are you looking for a fun and educational way to spend your time? 
 Look no further! Quiz Master is your ultimate destination that will test your knowledge 
 and keep you entertained.
</Typography>

<Typography
  component="h3"
  variant="h4"
  align="center"
  color="text.secondary"
  gutterBottom
  pt={0}
>
<Link href="/Login" underline="always">Login</Link> now to start your journey with us!! 
</Typography>
</Container>
</HomePage>
    </div>
  )
}

export default WelcomePage;


