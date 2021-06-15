import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Particles from './components/Particles';




function App() {
  return (
    <>
      <Particles/>
      <Container className='top-margin'>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12}  md={4} lg={3}  > 
              <Profile />
          </Grid>
          <Grid item xs >
            <Router>
              <Header />
              <div className='main-content' >
                <Switch>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route  path='/'>
                  <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
    
  );
}

export default App;
