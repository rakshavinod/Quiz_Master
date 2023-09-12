import { Button, Card, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import congratulations from "../src/images/congratulations.jpg";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    border: 'none',
  }));

const FinalPage = () => {
  return (
    <div> 
    <Card
    sx={{width:"800px", height:"450px"}}
    >
    <Typography variant="h3" color="primary" sx={{textAlign: "center" , mt:"25px"}}>
    You have completed all questions!
    </Typography>
   
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>  <img src={congratulations} style={{width:"250px", height:"300px", display:"flex", paddingTop:"10px", paddingLeft:"25px"}} alt="Congratulations"/></Item>
  </Grid>
  <Grid item xs={6} >
    <Item>
        <Typography variant="h4" color="black" sx={{textAlign: "center" , mt:"45px"}}>
            Your Score
        </Typography>
        <Typography variant="h1" color="primary" sx={{textAlign: "center" , mt:"25px"}}>
            10/10
        </Typography></Item>
        <Button variant="contained" component={Link} to="/" sx={{mt:"30px", p:"15px 40px 15px 40px", mr:"-20px"}}>Go to Dashboard</Button>
  </Grid>
</Grid>

    </Card>
    </div>
  )
}

export default FinalPage