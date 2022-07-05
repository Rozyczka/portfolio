import React from 'react';
import { Box } from '@mui/system';

import { Article, ArticleImage, ArticleTitle, ArticleSource, ArticleTag, ArticleTags } from '../Styles/Topic.style';
import Grid from '@mui/material/Grid';


function Topic({title, source, date, fit, src}:{title:string, source:string,date:string,fit:string, src: string}) {
    return (
        <div><Article>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                <ArticleImage><Box
        component="img"
        sx={{
            borderRadius: '20px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%'
        }}
        src={src}/>
        </ArticleImage>
                </Grid>
                <Grid item xs={3}>
                    <ArticleTitle>{title}</ArticleTitle>
                </Grid>
                <Grid item xs={2}>
                    <ArticleSource>{source}</ArticleSource>
                </Grid>
                <Grid item xs={2}>
                <ArticleSource>{date}</ArticleSource>
                </Grid>
                <Grid item xs={2}>

                    <ArticleTags>
                        <ArticleTag>Poland</ArticleTag>
                        <ArticleTag>Euro</ArticleTag>

                    </ArticleTags>
                </Grid>
                <Grid item xs={2}>
                <ArticleSource>{fit}</ArticleSource>
                </Grid>
            </Grid>
        </Article></div>
    )
}

export default Topic