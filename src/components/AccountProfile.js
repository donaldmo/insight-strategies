import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core/';

const user = {
  avatar: '/assets/images/avarter.jpg',
  city: 'Thembisa',
  country: 'Gauteng',
  jobTitle: 'Senior Developer',
  name: 'Donald Motswiri',
  timezone: 'GTM+2'
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar style={{ height: '124px', width: '124px'}}
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5"  >
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2" >
          {`${user.city} ${user.country}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text" >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
