import React from "react";
import { styled, alpha } from '@mui/material/styles';

export const Article = styled('div')(({ theme }) => ({
    background: '#FFFFFF',
    boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'stretch' ,
    height: '8vh',
    marginTop:'10px' ,
    marginBottom:'10px' ,
}));

export const ArticleImage = styled('div')(({ theme }) => ({
    
    borderRadius: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
}));

export const ArticleTitle = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: "15px",
    display: 'flex',
    alignItems: 'center',
    height: '100%',
}));

export const ArticleSource = styled('div')(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: "14px",
    display: 'flex',
    alignItems: 'center',
    height: '100%',
}));

export const ArticleTags = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    height: '100%'
}));

export const ArticleTag = styled('button')(({ theme }) => ({
    backgroundColor: '#F3F4F6',
    borderRadius: '5px',
    border: 'none',
    fontFamily: 'Montserrat',
    marginRight: '2px',
    marginLeft: '2px'

}));