import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CustomizedBadges from './CustomizedBadges'

const customers = [
  {
    name: 'Renewilwe Gwangwa',
  },
  {
    name: 'Vuyani Sikhakhane',
  },
  {
    name: 'Kgaugelo Kgaugelo',
  },
  {
    name: 'Nukeri Aswell',
  },
  {
    name: 'Dieketseng Mphuti',
  },
  {
    name: 'Donald Motswiri',
  },
  {
    name: 'Didintle Morebudi',
  },
  {
    name: 'Thlolo Rampsapedi',
  },
  {
    name: 'Ntebatse Marea',
  },
  {
    name: 'Lindani Ntanga',
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function CustomersList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {customers.map((item, key) => (
        <ListItem alignItems="flex-start" key={key}>
        <ListItemAvatar>
          <Avatar alt={item.name} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Thembisa Furniture Suppliers
              </Typography>
              {" — I can't wait to have my order deliverd…"}
            </React.Fragment>
          }
        />

        <ListItemSecondaryAction>
          <CustomizedBadges />
        </ListItemSecondaryAction>
      </ListItem>
      ))}
    </List>
  );
}