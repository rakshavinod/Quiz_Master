import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme, alpha, ThemeProvider } from '@mui/material/styles';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from '@mui/material';
import data from "./Q&A.json";
import FinalPage from './FinalPage';
import HomePage from './HomePage';



const violetBase = '#800080';
const pinkBase = '#FFE4E1';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    primary: {
      main: violetMain,
    },
    secondary: {
      main: pinkBase,
    }
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== "") {
      setSelectedOption(""); 
      setCurrentQuestion(currentQuestion + 1);
    } else {
     alert("Please select any option to go to next question");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <HomePage>
          <ThemeProvider theme={theme}>
            {currentQuestion < data.length && (
              <Card
                key={data[currentQuestion].id}
                sx={{
                  minWidth: 1000,
                  marginTop: "150px",
                  height: 320,
                  marginBottom: "60px",
                  backgroundColor: "#800080",
                }}
              >
                <CardContent>
                  <Typography
                    component="h1"
                    variant="h5"
                    color="white"
                    align="left"
                    sx={{ pt: "10px", pl: "10px" }}
                  >
                    {data[currentQuestion].question}
                  </Typography>
                  <Grid container spacing={2}>
                    {data[currentQuestion].options.map((option, index) => (
                      <Grid item xs={6} sm={6} key={index}>
                        <Item sx={{ display: "flex", alignItems: "flex-end", mt: "27px", pr: "40px", pl: "12px" }}>
                          <FormControlLabel
                            value={option}
                            control={<Radio />}
                            label={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                          />
                        </Item>
                      </Grid>
                    ))}
                  </Grid>
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "#DA70D6",
                      color: "white",
                      display: "flex",
                      marginLeft: "905px",
                      marginTop: "17px",
                    }}
                    variant="contained"
                    onClick={handleNextQuestion}
                  >
                    Next
                  </Button>
                </CardContent>
              </Card>
            )}
            {currentQuestion >= data.length && (
              <FinalPage />
            )}

         
          </ThemeProvider>
        </HomePage>
      </header>
    </div>
  );
}

export default Questions;
