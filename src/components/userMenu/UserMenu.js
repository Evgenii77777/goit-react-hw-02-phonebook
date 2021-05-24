import React from "react";
import { Button } from "@material-ui/core";

const UserMenu = ({ logOut, email }) => {
  return (
    <>
      <span>Welcome {email} </span>

      <Button onClick={() => logOut()} variant="outlined" color="primary">
        LogOut
      </Button>
    </>
  );
};

export default UserMenu;
