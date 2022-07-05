import React from 'react';
import { Box } from '@mui/system';
import { Titletext, Titleheader, Divider } from '../Styles/Common.style';
import Grid from '@mui/material/Grid';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Topic from './Components/Topic';

export const Topicheaders = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    color: 'text.secondary',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '15px'

}))

const tresc = [
    {
      title: "200-kilowy dzik wpadł do szamba",
      source: "xxtentacion",
      date: "29.07.2020",
      fit: "lewica",
      src: 'https://images.pexels.com/photos/1344772/pexels-photo-1344772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: "Coraz mniej Stoczni Gdańskiej",
      source: "FilipSpringer",
      date: "2.03.2022",
      fit: "lewica",
      src: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: "Pustynia nikogo nie oszczędza",
      source: "AriGrani",
      date: "14.04.2022",
      fit: "prawica",
      src:'https://images.pexels.com/photos/998646/pexels-photo-998646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: "200-kilowy dzik wpadł do szamba",
      source: "xxtentacion",
      date: "29.07.2020",
      fit: "lewica",
      src: 'https://images.pexels.com/photos/1344772/pexels-photo-1344772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: "Coraz mniej Stoczni Gdańskiej",
      source: "FilipSpringer",
      date: "2.03.2022",
      fit: "lewica",
      src: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    },
    {
      title: "Pustynia nikogo nie oszczędza",
      source: "AriGrani",
      date: "14.04.2022",
      fit: "prawica",
      src:'https://images.pexels.com/photos/998646/pexels-photo-998646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    },
  ]
  

function Topicpage() {
    return (
        <div><Box sx={{ marginRight: '11vw', marginLeft: '11vw', marginTop: '4vh', height: '100vh' }}>
            <Titleheader>Topic</Titleheader>
            <Divider />
            
            <Grid container spacing={2}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <Topicheaders>Artykuł</Topicheaders>
                </Grid>
                <Grid item xs={2}>
                    <Topicheaders>Źródło</Topicheaders>
                </Grid>
                <Grid item xs={2}>
                    <Topicheaders>date</Topicheaders>
                </Grid>
                <Grid item xs={2}>
                    <Topicheaders>Bańki</Topicheaders>
                </Grid>
                <Grid item xs={2}>
                    <Topicheaders>Zgodność</Topicheaders>
                </Grid>
            </Grid>
            
            {tresc.map(element => {
              return (
                <Topic title={element.title} source={element.source} date={element.date} fit={element.fit} src={element.src}></Topic>
              )
            })}
            <br></br>
                        <Divider />

        </Box></div>
    )
}

export default Topicpage
