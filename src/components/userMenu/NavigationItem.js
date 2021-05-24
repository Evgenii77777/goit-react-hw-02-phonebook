import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ item, location, isAuth }) => {
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
