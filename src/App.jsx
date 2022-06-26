import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import ProminentAppBar from "./components/ProminentAppBar";
import Rightbar from "./components/Rightbar";
import AccountPage from "./pages/account/AccountPage";

import Dashboard from "./pages/dashboard/Dashboard";

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
  const queryParams = new URLSearchParams(window.location.search)
  const page = queryParams.get("page")
  const title = queryParams.get("title")

  const classes = useStyles();

  const renderPage = () => {
    console.log(page)

    switch (page) {
      case 'profile':
        return <AccountPage/>

      case 'dashbord':
        return <Dashboard />
    
      default:
        return <Feed/>
        break;
    }
  }

  return (
    <div>
      <ProminentAppBar title={title}/>
      <Grid container>
        <Grid item sm={12} xs={12} className={classes.middle}>
          {/* <Feed /> */}
          {renderPage(page)}
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
