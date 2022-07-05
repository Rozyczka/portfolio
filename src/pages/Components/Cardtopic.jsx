import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function Cardtopic() {
  return (
    <div><Card sx={{
        borderRadius: '0px 20px 20px 0px',
        height:'20vh',
        maxHeight: '180px',
        paddingBottom: '5px'
    }}>
        <CardActionArea
        >
            <CardMedia
            component="img"
            sx={{
                backgroundSize: 'cover',
    backgroundPosition: 'center',
                height:'8vh',
                maxHeight: '90px'
            }}
            src="https://images.pexels.com/photos/4614165/pexels-photo-4614165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></CardMedia>
            <CardContent>

                <Typography>
                    Dostępne artykuły: 5678
                </Typography>
                <Typography>
                    Komentarze: 5678
                </Typography>
                <Typography>
                    Uzytkownicy: 5678
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card></div>
  )
}

export default Cardtopic