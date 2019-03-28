import React, { Component } from "react";

//Material UI Imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//Redux Imports
import { connect } from "react-redux";
import { updateSelectedProductId } from "../../Actions/selectedProductId";

import { Link } from "react-router-dom";

class SearchResults extends Component {
  handleClick = (event, id) => {
    this.props.dispatch(updateSelectedProductId(id));
  };

  render() {
    let resultContent;

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    //destructure
    const { results } = this.props;

    if (results) {
      resultContent = (
        <List component="nav">
          {results.map(result => (
            <ListItemLink
              onClick={event => this.handleClick(event, result.productid)}
              key={result.productid}
              //href={`/tblproduct/${result.productid}`}
              component={Link}
              to={`/tblproduct/${result.productid}`}
            >
              <ListItemText primary={result.fulltitle} />
              <ListItemText primary={result.isbn13} />
            </ListItemLink>
          ))}
        </List>
      );
    } else {
      resultContent = null;
    }

    return <div>{resultContent}</div>;
  }
}

//SearchResults.propTypes = {
// results: PropTypes.array.isRequired
//};
const mapStateToProps = state => ({
  selectedProductId: state.selectedProductId
});

export default connect(mapStateToProps)(SearchResults);
