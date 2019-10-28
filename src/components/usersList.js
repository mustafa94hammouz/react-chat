import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import getUsers from "../services/getUsers";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers(localStorage.getItem("token"));
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key='Subheader' cols={2} style={{ height: "auto" }}>
          <ListSubheader component='div'>Friends</ListSubheader>
        </GridListTile>
        {users.map((user, key) => (
          <GridListTile key={key}>
            <img src='https://picsum.photos/200/300' alt={user.firstName} />
            <GridListTileBar
              title={user.firstName + " " + user.lastName}
              subtitle={<span>{user.email}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
