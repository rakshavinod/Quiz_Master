import Typography from '@mui/material/Typography';
import "./styles/HomePage.css";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../src/images/Logo.png';
import { createTheme, alpha, ThemeProvider} from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';


const violetBase = '#800080';
const pinkBase = '#FFE4E1';
const violetMain = alpha(violetBase, 0.7);

const navItems = [
  {label:'Home', to:"/"},
  {label:'About', to:"/about"},
  {label:'Login', to:"/login"}
];

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




const HomePage= ({children}) => {
  const location = useLocation();
  return (
   
  
  <div className="App">
    <header className="App-header">
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {theme && location.pathname === "/questions" ? (
            <div>
             <AppBar component="nav" color="primary">
        <Toolbar>
          <img src={Logo} style={{width:"60px"}}/>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            QUIZ MASTER
          </Typography>
         
          </Toolbar>
          </AppBar>
            </div>
          ):(
      <AppBar component="nav" color="primary">
        <Toolbar>
          <img src={Logo} style={{width:"60px"}}/>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            QUIZ MASTER
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
              key={item.label} 
              component={Link}
              to={item.to}
              sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </AppBar>) }
      </Box>

     
          {children}
      

         
       
        </ThemeProvider>
        </header>
    </div>
    
  );
}

export default HomePage;
