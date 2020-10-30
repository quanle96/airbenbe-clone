import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "./index.css";

function SearchIcon(props) {
  return (
    <div className='AwesomeIcon-search-wraper'>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 300,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={this.props.clickHandle}
          className={classNames(
            "button-search",
            "button-hover",
            "flex-row-space-btw",
            { "button-border": true }
          )}
          style={{ width: this.state.width }}
        >
          <div className='button-search-item button-search-text'>
            Bắt đầu tìm kiếm
          </div>
          <SearchIcon className='button-search-item' />
        </button>
      </div>
    );
  }
}

export default Search;
