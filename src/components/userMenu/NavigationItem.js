import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAuthsSelector } from "../../redux/auth/authSelectors";

const NavigationItem = ({ item }) => {
  const isAuth = useSelector(getAuthsSelector);
  const location = useLocation();
  return (
    <>
      {!item.isPrivate && !item.isRestricted && (
        <li className="listItem">
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="NavLink"
            activeClassName="NavLink--active"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {isAuth && item.isPrivate && !item.isRestricted && (
        <li className="listItem">
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="NavLink"
            activeClassName="NavLink--active"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!isAuth && !item.isPrivate && item.isRestricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="NavLink"
            activeClassName="NavLink--active"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
