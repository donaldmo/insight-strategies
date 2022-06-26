import { Container, makeStyles } from "@material-ui/core"
import Account from "../../components/Account";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const AccountPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* <FullWidthTabs/> */}
      <Account />
    </Container>
  );
};

export default AccountPage;