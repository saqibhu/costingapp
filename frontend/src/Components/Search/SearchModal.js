import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class SearchModal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/*<SearchIcon onClick={this.handleOpen} />*/}
        <Button onClick={this.handleOpen} color="inherit">
          Search
        </Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <SearchInput />
            <SearchResults />
          </div>
        </Modal>
      </div>
    );
  }
}

//SearchModal.propTypes = {
// classes: PropTypes.object.isRequired
//};

const SearchModalWrapped = withStyles(styles)(SearchModal);

export default SearchModalWrapped;
