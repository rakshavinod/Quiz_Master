import HomePage from './HomePage'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const Instructions = () => {
  return (
    <div>
        <HomePage>
        <Card sx={{ maxWidth: 800, marginTop:"150px", marginBottom:"60px"}}>
      <CardContent>
      <Typography
        variant="p"
        align="center"
        color="text.primary"
        fontSize="25px"
        gutterBottom
        
        >
       Instructions for Quiz
        </Typography>
        <Typography
  variant="p"
  align="justify"
  color="text.secondary"
  fontSize="16px"
  gutterBottom
 
>
    <List>
        <ListItem>
            Welcome to the Quiz Master! Before you dive into the quiz, please take a moment to read these instructions to ensure a smooth and enjoyable experience.
        </ListItem></List>
</Typography>
<Typography
        variant="p"
        align="left"
        color="text.primary"
        fontSize="20px"
        gutterBottom
        
        >
       How to Play
        </Typography>
        <Typography
  variant="p"
  align="center"
  fontSize="16px"
  color="text.secondary"
  gutterBottom
 
>
    <List>
<ListItem> <ListItemIcon>
         <CircleIcon fontSize="small"/>
        </ListItemIcon>Choose a Quiz: On the homepage, select the quiz category that interests you the most. We offer a wide range of topics, so pick one that you're confident in or want to learn more about.</ListItem>

<ListItem> <ListItemIcon>
 <CircleIcon fontSize="small"/>
        </ListItemIcon>Start the Quiz: Click the "Start Quiz" button to begin the quiz. You'll be presented with a series of multiple-choice questions.</ListItem>

<ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>Answer Questions: For each question, select the answer you believe is correct by clicking on the corresponding option.</ListItem>

<ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>Submit Answers: Once you've answered all the questions, click the "Submit" button to see your results.</ListItem>

</List>
</Typography>
<Typography
        variant="p"
        align="left"
        color="text.primary"
        fontSize="20px"
        gutterBottom
       
        >
       Scoring
        </Typography>
        <Typography
  variant="p"
  align="center"
  color="text.secondary"
  fontSize="16px"
  gutterBottom
 
>
<List>
    <ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>You'll receive one point for each correct answer.
There are no penalties for incorrect answers, so feel free to guess if you're unsure.
    </ListItem>
</List>
</Typography>
<Typography
        variant="p"
        align="left"
        color="text.primary"
        fontSize="20px"
        gutterBottom
       
        >
       Hints and Tips
        </Typography>
        <Typography
  variant="p"
  align="center"
  color="text.secondary"
  fontSize="16px"
  gutterBottom
 
>
<List>
    <ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>Read each question carefully before answering.

</ListItem>
<ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>Don't spend too much time on a single question. If you're unsure, make an educated guess and move on.</ListItem>
<ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>Keep an eye on the timer if there's one. Pace yourself accordingly.</ListItem>
</List>
</Typography>
<Typography
        variant="p"
        align="left"
        color="text.primary"
        fontSize="20px"
        gutterBottom
      
        >
       Have Fun
        </Typography>
        <Typography
  variant="p"
  align="center"
  color="text.secondary"
  fontSize="16px"
  gutterBottom
 
>
<List>
    <ListItem> <ListItemIcon>
           <CircleIcon fontSize="small"/>
        </ListItemIcon>
    Most importantly, have fun and enjoy the challenge! Quizzes are a great way to learn and test your knowledge. Good luck, and may the Quiz Master be with you!

If you're ready to start the quiz, click the "Start Quiz" button below.
        </ListItem></List>
</Typography>
      </CardContent>
      <CardActions>
        <Button size="large" sx={{ ml:"330px", mb:"15px", mr:"5px"}} variant="contained" component={Link} to="/questions">Start Quiz</Button>
      </CardActions>
    </Card>
        </HomePage>
        </div>
  )
}

export default Instructions