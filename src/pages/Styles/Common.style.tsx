import React from "react";
import { styled, alpha } from '@mui/material/styles';

export const Divider = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '10vw',
    marginRight: '10vw',
    marginTop: '1vh',
    marginBottom: '15px',
    opacity: '0.2',
    border: '1px solid #000000',
    boxshadow: '110px 4px 4px rgba(0, 0, 0, 0.25)'
}));

export const Titletext = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    color: '#747474',

}));

export const Titleheader = styled('div')(({ theme }) => ({

    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    width:'100%',
    justifyContent: 'center',
    color: '#000000',
    marginBottom: '20px'

}));

export const Filtrheader = styled('div')(({ theme }) => ({

    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '15px',
 
    color: '#000000',
}));

export const Input = styled('input')(({ theme }) => ({
    border: '2px solid #DEDEDE',
    boxShadow: "inset 3px 3px 7px 1px rgba(0, 0, 0, 0.13)",
    borderRadius: "10px 10px 10px 10px",
    height:"35px",
    width:"80%",
    
    flexgrow: "0.4",

}));