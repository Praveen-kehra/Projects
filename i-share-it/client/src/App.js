import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import shareImg from "./images/share.png";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Posts from './components/posts/Posts';
import Form from './components/forms/Forms';
import './index.css'
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import useStyles from './styles.js';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (  
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={shareImg} alt="icon" height="40" />
                <Typography className={classes.heading} variant="h3" align="center">Share</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <ScrollToTop />
        </Container>
    )
}

export default App;