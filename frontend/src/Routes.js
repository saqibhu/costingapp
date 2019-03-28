import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Dashboard/Main";
import TblProductDetails from "./Components/Tblproduct/TblProductDetails";

import About from "./Components/About";

const BaseRouter = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/tblproduct/:selectedProductId"
        component={TblProductDetails}
      />
      <Route exact path="/about" component={About} />
    </Fragment>
  );
};

export default BaseRouter;
