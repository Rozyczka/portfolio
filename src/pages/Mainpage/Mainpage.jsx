import React from "react";
import { Box } from "@mui/system";
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import { Divider, Tileheader, Bigtile, Midtile, Smalltile, Localtag, Standardtext, Titletext } from "./Components";
import Cardtopic from "../Components/Cardtopic";



export default function Mainpage() {
    return (
        <div>
            <Box sx={{ marginRight: '11vw', marginLeft: '11vw', marginTop: '5vh' }}>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12}>

                        <Titletext>
                        Banki informacyjne
                        </Titletext>

                    </Grid>

                    <Grid item xs={6} sx={{ height: '40vh', maxHeight:'500px' }}>
                        <Bigtile >
                            <Tileheader >
                                Duzy naglowek
                            </Tileheader>
                        </Bigtile>
                    </Grid>
                    <Grid item xs={6} sx={{ height: '40vh',  maxHeight:'500px' }}>
                        <Grid container spacing={1} sx={{ height: '100%' }}>
                            <Grid item xs={4}>
                                <Smalltile>
                                    <Tileheader>
                                        Naglowek
                                    </Tileheader>
                                </Smalltile>
                            </Grid>
                            <Grid item xs={8}>
                                <Midtile>
                                    <Tileheader>
                                        Naglowek
                                    </Tileheader>
                                </Midtile>
                            </Grid>

                            <Grid item xs={8}>
                                <Midtile>
                                    <Tileheader>
                                        Naglowek
                                    </Tileheader>
                                </Midtile>
                            </Grid>
                            <Grid item xs={4}>
                                <Smalltile>
                                    <Tileheader>
                                        Naglowek
                                    </Tileheader>
                                </Smalltile>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>

                        <Divider />

                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Titletext>
                                    Lokalne - Wrocław
                                </Titletext>
                            </Grid>
                            <Grid item xs={12}>
                                <Container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start',
                                
                            paddingLeft: '1px' }}>
                                    <Localtag>smog</Localtag>
                                    <Localtag>przebudowa miasta</Localtag>
                                    <Localtag>wypadki</Localtag>
                                    <Localtag>interwencje policji</Localtag>
                                    <Localtag>inwestycje</Localtag>
                                    <Localtag>wybory</Localtag>



                                </Container>
                            </Grid>
                            <Grid item xs={12}>
                                <Titletext>
                                    Lokalne - Dolnośląskie
                                </Titletext>
                            </Grid>
                            <Grid item xs={12}>
                                <Container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                    <Localtag>smog</Localtag>
                                    <Localtag>przebudowa miasta</Localtag>
                                    <Localtag>wypadki</Localtag>
                                    <Localtag>interwencje policji</Localtag>
                                    <Localtag>inwestycje</Localtag>
                                    <Localtag>wybory</Localtag>



                                </Container>
                            </Grid>
                            <Grid item xs={12}>
                                <Titletext>
                                    Lokalne - Polska
                                </Titletext>
                            </Grid>
                            <Grid item xs={12}>
                                <Container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                    <Localtag>smog</Localtag>
                                    <Localtag>przebudowa miasta</Localtag>
                                    <Localtag>wypadki</Localtag>
                                    <Localtag>interwencje policji</Localtag>
                                    <Localtag>inwestycje</Localtag>
                                    <Localtag>wybory</Localtag>



                                </Container>
                            </Grid>

                        </Grid>



                    </Grid>
                    <Grid item xs={8}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Titletext>
                                    Popularne tematy
                                </Titletext>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                            <Grid item xs={4}>
                                <Cardtopic/>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>

            </Box>
        </div>
    )
}
