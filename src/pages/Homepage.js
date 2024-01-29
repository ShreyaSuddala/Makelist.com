import React from 'react'
import '../assets/styles/Home.css'
import { Button, Card, CardContent, CardMedia, Grid} from '@mui/material'
import movieImg from '../assets/images/moviepic.jpg'
import travelImg from '../assets/images/travel.jpg'
import wishImg from '../assets/images/wishh.webp'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {

  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate('/')
  }
  const styles={
    backgroundColor:'black',
    color:'white',
    margin:'40px'
  }

  return (
    
<div>
    <Grid item spacing={2} display="flex" justifyContent='space-between'>
      <Grid lg={10} md={10} xs={11} sm={11}>
      <h1>Thriving in Triumph</h1>
      <h4>-- A Chronicle of Your Accomplished Bucket List --</h4>
      </Grid>
      <Grid md={2} lg={2} xs={1} sm={1} >
      <Button style={styles} onClick={handleLogout}>Logout</Button>
      </Grid>
    </Grid>
    <div>
      <hr></hr>
    </div>
  
    <div className='card-div'>
        <Card className='card'>
          <CardMedia className='img' image={movieImg} alt='not-found'>
            <CardContent>
              <h3 className='h3Font' style={{color:'#01579b'}}>Movies</h3>
            </CardContent>
          </CardMedia>
            <p>The screen fades to black, and with it, another movie checked off the list.</p>
        </Card>
         <Card className='card'>
          <CardMedia className='img' image={travelImg} alt='not-found'>
            <CardContent>
              <h3 className='h3Font' style={{color:'white'}}>Travel</h3>
            </CardContent>
          </CardMedia>
            <p>Wander often, wonder always – each journey is a new story.</p>
        </Card>
        <Card className='card'>
          <CardMedia className='img' image={wishImg} alt='not-found'>
            <CardContent>
              <h3  className='h3Font' style={{color:'darkgreen'}} >Fullfilled</h3>
            </CardContent>
          </CardMedia>
            <p>Build a roster of fulfilled desires and completed goals.</p>
        </Card> 
    </div>
    
    <div>
</div>

    </div>
    
    
  )
}

export default Homepage
