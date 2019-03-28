import React, { Component } from "react";
import propTypes from "prop-types";

class SearchResultItem extends Component {
  render() {
    const { fulltitle, firstimpproductid } = this.props.value;

    return (
      <li>
        {fulltitle}, {firstimpproductid}
      </li>
    );
  }
}

SearchResultItem.propTypes = {
  value: propTypes.object.isRequired
};

export default SearchResultItem;
