import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Main from "./Components/Dashboard/Main";
import TblProductDetails from "./Components/Tblproduct/TblProductDetails";
import TblProductNew from "./Components/Tblproduct/TblProductNew";

import About from "./Components/About";
import Reports from "./Components/Reporting/Reports";

const BaseRouter = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/tblproduct/:selectedProductId"
        component={TblProductDetails}
      />
      <Route exact path="/new" component={TblProductNew} />
      <Route exact path="/reports" component={Reports} />
      <Route exact path="/about" component={About} />
    </Fragment>
  );
};

export default BaseRouter;
