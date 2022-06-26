
import { makeStyles } from "@material-ui/core";
import Post from "./Post";
import Grid from '@material-ui/core/Grid';
import { Fragment } from "react";
import CustomizedBreadcrumbs from "./CustomizedBreadCrumps";

const furniture = [
  {
    name: "Green Fabric Sofa",
    price: 'R8,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: "Brown and White Sofa Chair",
    price: 'R13,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: "Wall Mounted Shelf",
    price: 'R33,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: "Spice Joy White Sofa",
    price: 'R23,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80'
  },
  {
    name: "Brown Lather 3-seat Sofa",
    price: 'R43,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
]

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CustomizedBreadcrumbs />

      <Grid container spacing={3} style={{marginTop: '20px'}}>
        {furniture.map((item, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Post title={item.name} img={item.image} />
          </Grid>
        ))}
      </Grid>
    </Fragment>

  );
};

export default Feed;
