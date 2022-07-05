import React from "react";
import { styled, alpha } from '@mui/material/styles';

export const Divider = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '10vw',
    marginRight: '10vw',
    marginTop: '1vh',
    marginBottom: '1vh',
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

export const Localtag = styled('div')(({ theme }) => ({
    background: '#FFFFFF',
    borderRadius: '10px',
    padding: '7px',
    margin: '5px',
    fontFamily: 'Montserrat',
    '&:hover': {
        boxShadow: '3px 3px 12px 1px rgba(0, 0, 0, 0.25)'
    },

}));

export const Standardtext = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: '600',
    color: '#000000',

}));

export const Smalltile = styled('div')(({ theme }) => ({
    backgroundColor: '#2956ff',
    height: '100%',
    borderRadius: '20px',
    boxShadow: '3px 3px 12px 1px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'flex-end',


}));

export const Midtile = styled('div')(({ theme }) => ({
    backgroundColor: '#1b998b',
    height: '100%',
    borderRadius: '20px',
    boxShadow: '3px 3px 12px 1px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'flex-end',

}));

export const Bigtile = styled('div')(({ theme }) => ({
    backgroundColor: '#9c60ff',
    
    height: '100%',
    borderRadius: '20px',
    boxShadow: '3px 3px 12px 1px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'flex-end',
    '&:hover': {
        boxShadow: '4px 4px 12px 1px rgba(0, 0, 0, 0.4)',
    },

}));

export const Tileheader = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '2vh',
    marginLeft: '2vh'
}));
