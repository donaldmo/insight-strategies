
import { makeStyles } from "@material-ui/core";
import Post from "./Post";
import Grid from '@material-ui/core/Grid';
import { Fragment } from "react";
import CustomizedBreadcrumbs from "./CustomizedBreadCrumps";

const furniture = [
  {
    name: "Green Fabric Sofa",
    price: 'R3,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'assets/products/furniture/furniture-3.jpg'
  },
  {
    name: "Brown and White Sofa Chair",
    price: 'R3,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'assets/products/furniture/furniture-1.jpg'
  },
  {
    name: "Wall Mounted Shelf",
    price: 'R3,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'assets/products/furniture/furniture-4.jpg'
  },
  {
    name: "Spice Joy White Sofa",
    price: 'R3,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'assets/products/furniture/furniture-5.jpg'
  },
  {
    name: "Brown Lather 3-seat Sofa",
    price: 'R3,000',
    description: 'Simply Recipes Less Stress. More Joy',
    image: 'assets/products/furniture/furniture-2.jpg'
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
