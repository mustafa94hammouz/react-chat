import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import getProfile from "../services/getProfile";
import UsersList from "../components/usersList";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 140
  }
});

const UserProfile = withRouter(props => {
  const [data, setData] = useState({
    userName: "",
    email: ""
  });

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      props.history.push("/login");
    }
    getProfile(localStorage.getItem("token")).then(res => {
      setData({
        userName: res.data.firstName,
        email: res.data.email
      });
    });
  });

  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://picsum.photos/200/300'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.userName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <UsersList />
      </CardActions>
      <Button onClick={handleLogOut} color='secondary'>
        Logout
      </Button>
    </Card>
  );
});

export default withRouter(UserProfile);
