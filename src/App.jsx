import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import ProminentAppBar from "./components/ProminentAppBar";
import Rightbar from "./components/Rightbar";
import AccountPage from "./pages/account/AccountPage";

  const useStyles = makeStyles((theme) => ({
    middle: {
      justifyContent: 'center'
    },
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    left: {
      [theme.breakpoints.down("sm")]: {

      },
    }
  }));

const App = () => {

  const classes = useStyles();

  return (
    <div>
      <ProminentAppBar />
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.middle}>
          {/* <Feed /> */}
          <AccountPage />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
