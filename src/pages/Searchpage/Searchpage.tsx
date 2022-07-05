import React from 'react';
import { Box } from '@mui/system';
import { Titletext, Titleheader, Divider } from '../Styles/Common.style';
import Grid from '@mui/material/Grid';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import theme from '../../App';
import { Filtrheader } from '../Styles/Common.style';
import { Input } from '../Styles/Common.style';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Cardtopic from '../Components/Cardtopic';
import Button from '@mui/material/Button';

function RekordChceckbox({ checkboxlabel }: { checkboxlabel: string }) {
    return (
        <FormControlLabel
            control={<Checkbox sx={{

                Color: 'secondary.main',

                '&.Mui-checked': {
                    color: 'secondary.main',
                },
            }} />} label={<Typography fontSize="14px" >
                {checkboxlabel}
            </Typography>} />
    );
}

function RekordRadio({ radiolabel }: { radiolabel: string }) {
    return (
        <FormControlLabel
            control={<Radio sx={{

                Color: 'primary.dark',

                '&.Mui-checked': {
                    color: 'secondary.main',
                },
            }} />} label={<Typography fontSize="14px" fontFamily="Montserrat, sans-serif">
                {radiolabel}
            </Typography>} />
    );
}

export default function Searchpage() {
    return (
        <div><Box sx={{ marginRight: '11vw', marginLeft: '11vw', marginTop: '4vh', height: '100vh' }}>
            <Titleheader>Wyszukiwana fraza (56789 wyników)</Titleheader>
            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Titletext>Filtry</Titletext>
                        </Grid>
                        <Grid item xs={12}>
                            <Filtrheader>
                                Szukaj w...
                            </Filtrheader>
                        </Grid>
                        <Grid item xs={12}>
                            <FormGroup  >
                                <RekordChceckbox checkboxlabel={"Tematy"} />
                                <RekordChceckbox checkboxlabel={"Bańki"} />
                                <RekordChceckbox checkboxlabel={"Uzytkownicy"} />
                                <RekordChceckbox checkboxlabel={"Artykuły"} />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Filtrheader>
                                Kryterium #2
                            </Filtrheader>
                        </Grid>
                        <Grid item xs={12}>
                            <Input />
                        </Grid>
                        <Grid item xs={12}>
                            <Filtrheader>
                                Kryterium #3
                            </Filtrheader>
                        </Grid>
                        <Grid item xs={12}>
                            <RadioGroup  >
                                <RekordRadio radiolabel={"Tematy"} />
                                <RekordRadio radiolabel={"Bańki"} />
                                <RekordRadio radiolabel={"Uzytkownicy"} />
                                <RekordRadio radiolabel={"Artykuły"} />



                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <Button sx={{
                    fontWeight: '700',
                    bgcolor: 'secondary.main',
                    
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    
                    color: 'primary.main',
                    '&:hover': {
                      fontWeight: '700',
                      bgcolor: 'secondary.dark',
                      color: 'primary.main',
                    },
                  }}>Search</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Titletext>
                                Tematy zawierające "Fraza"
                            </Titletext>
                        </Grid>


                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                        <Grid item xs={4}>
                            <Cardtopic />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




        </Box></div>
    )
}
