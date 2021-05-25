import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  getAuthsSelector,
  getEmailSelector,
} from "../../redux/auth/authSelectors";
import mainRoutes from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import UserMenu from "./UserMenu";

const Navigation = () => {
  const isAuth = useSelector(getAuthsSelector);
  const email = useSelector(getEmailSelector);
  const location = useLocation();

  return (
    <>
      <ul>
        {mainRoutes.map((item) => (
          <NavigationItem
            item={item}
            isAuth={isAuth}
            location={location}
            key={item.path}
          />
        ))}
        {isAuth && <UserMenu email={email} />}
      </ul>
    </>
  );
};

export default Navigation;
