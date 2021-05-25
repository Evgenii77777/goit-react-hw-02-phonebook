import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getEmailSelector } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authActions";

const UserMenu = () => {
  const email = useSelector(getEmailSelector);
  const dispatch = useDispatch();
  const logOutContacts = () => dispatch(logOut());
  return (
    <>
      <span>Welcome {email} </span>

      <Button onClick={logOutContacts} variant="outlined" color="primary">
        LogOut
      </Button>
    </>
  );
};

export default UserMenu;
