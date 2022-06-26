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
  avatar: 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/195248350_5621027371272921_5114037717265549872_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=peagORG2kDsAX_WArYI&_nc_ht=scontent-jnb1-1.xx&oh=00_AT-7PMu1YmxZ1afmD7Aiy2tuyxaVUXvfisXHT7HYxJushQ&oe=62DD8AB9',
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
