import { Grid, Box, Container, Typography } from '@material-ui/core/';
import { AccountProfile } from './AccountProfile';
import { AccountProfileDetails } from './AccountProfileDetails';

const Account = () => (
  <>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }} >
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <AccountProfile />
          </Grid>

          <Grid item xs={12} >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);


export default Account;
