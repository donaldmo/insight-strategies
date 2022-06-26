import { Container, makeStyles } from "@material-ui/core"
import FullWidthTabs from './FullWidthTabs'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <FullWidthTabs/>
    </Container>
  );
};

export default Feed;
