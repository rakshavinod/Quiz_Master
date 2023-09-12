import { Container, List, ListItem, Link, Typography } from '@mui/material'
import HomePage from './HomePage'

const AboutPage = () => {
  return (
    <div>
        <HomePage>
        <Container disableGutters maxWidth="md" component="p" sx={{ pt: 2, pb: 2, mt:"80px"}}>
        <Typography
        component="h1"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        pt={0}
        >
       Why Choose Quiz Master?
        </Typography>
        <Typography
  component="h2"
  variant="h6"
  align="left"
  color="text.secondary"
  gutterBottom
  pt={0}
>
    <List>
<ListItem>Challenging Questions: Our quizzes feature thought-provoking 
    questions that will push your knowledge to the limit and help you learn new facts along the way.
    </ListItem>
    <ListItem>
    Educational Fun: Quizzes aren't just fun; they're also a great way to 
    learn new things. Expand your knowledge while having a blast.
    </ListItem>
</List>
</Typography>
<Typography
        component="h1"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        pt={0}
        >
       How It Works?
        </Typography>
        <Typography
  component="h2"
  variant="h6"
  align="left"
  color="text.secondary"
  gutterBottom
  pt={0}
>
    <List>
<ListItem>Browse Quizzes: Explore our extensive collection of quizzes and choose the category that interests you the most.</ListItem>

<ListItem>Start Quiz: Begin the quiz, answer the questions to the best of your abilities, and earn points with each correct answer.</ListItem>

<ListItem>Track Your Progress: Keep track of your scores and see how you stack up against other quiz enthusiasts.</ListItem>

<ListItem>Challenge Your Friends: Share quizzes with friends and challenge them to beat your scores.</ListItem>

<ListItem>Become a Quiz Master: Show off your knowledge, earn badges, and rise through the ranks to become a true Quiz Master.
    </ListItem>
</List>
</Typography>
<Typography
        component="h1"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        pt={0}
        >
       Join the Quiz Master Community
        </Typography>
        <Typography
  component="h2"
  variant="h6"
  align="left"
  color="text.secondary"
  gutterBottom
  pt={0}
>
<List>
    <ListItem>Quiz Master isn't just a website; it's a community of curious minds. Join us today to embark on a journey of knowledge, fun, and friendly competition
    </ListItem>
</List>
</Typography>
<Typography
        component="h1"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        pt={0}
        >
       Ready to Get Started?
        </Typography>
        <Typography
  component="h2"
  variant="h6"
  align="left"
  color="text.secondary"
  gutterBottom
  pt={0}
>
<List>
    <ListItem>Click the button below to dive into your first quiz and see how much you really know. Are you up for the challenge?

</ListItem>
<ListItem><Link href="/Login">Start your Quiz Journey</Link></ListItem>
</List>
</Typography>
<Typography
        component="h1"
        variant="h5"
        align="left"
        color="text.primary"
        gutterBottom
        pt={0}
        >
       Stay Connected
        </Typography>
        <Typography
  component="h2"
  variant="h6"
  align="left"
  color="text.secondary"
  gutterBottom
  pt={0}
>
<List>
    <ListItem>
        Follow us on Facebook, Twitter, and Instagram for the latest quiz updates, trivia tidbits, and more.
        </ListItem></List>
</Typography>
        </Container>
        </HomePage>
    </div>
  )
}

export default AboutPage