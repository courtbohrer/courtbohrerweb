import './App.css';
import { Box, Container, Divider, Typography } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Container sx={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
          <Box width='100%' color='#F2D2BD'>
            <Typography variant="h1" fontWeight={700}> COURTNEY BOHRER</Typography>
            <Typography variant="h4" marginTop={10}> 
                  Hi, I'm Courtney. 👋 I'm a front end leaning full stack developer 
                  with a passion for building innovative products and inclusive communities. 
                  This website is currently under dev, but check back soon to learn more about me! Thanks for coming by!
            </Typography>
        </Box>
      </Container>

    </div >
  );
}

export default App;
