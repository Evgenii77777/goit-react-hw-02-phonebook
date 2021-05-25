import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router";
import { getAuthsSelector } from "../../redux/auth/authSelectors";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoutes";
import PublicRoute from "../../routes/PublicRoutes";

const Main = () => {
  const isAuth = useSelector(getAuthsSelector);
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

export default Main;
