import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from './Post'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>

      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </Grid>

      </Grid>
    </div>
  );
}