import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../redux/auth/authActions";
import mainRoutes from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import UserMenu from "./UserMenu";
const Navigation = ({ location, isAuth, logOut, email }) => {
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
        {isAuth && <UserMenu logOut={logOut} email={email} />}
      </ul>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: state.auth.token.idToken,
    email: state.auth.token.email,
  };
};

export default connect(mapStateToProps, { logOut })(withRouter(Navigation));
