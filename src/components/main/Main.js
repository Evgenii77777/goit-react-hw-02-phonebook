import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoutes";
import PublicRoute from "../../routes/PublicRoutes";

const Main = ({ isAuth }) => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {mainRoutes.map((item) =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: state.auth.token.idToken,
    // email: state.auth.token.email,
  };
};

export default connect(mapStateToProps)(Main);
