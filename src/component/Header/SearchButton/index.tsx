import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import './SearchButton.css';

function SearchIcon() {
  return (
    <div className='AwesomeIcon-search-wraper button-search-item'>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
type Props = { clickHandle?: (e: React.MouseEvent) => void };
class Search extends React.Component<Props> {
  readonly state = {
    width: 300,
  };

  render() {
    return (
      <div>
        <button
          id='searchbtn01'
          onClick={this.props.clickHandle}
          className={classNames(
            'button-search',
            'button-hover',
            'flex-row-space-btw',
            { 'button-border': true }
          )}
          style={{ width: this.state.width }}
        >
          <div className='button-search-item button-search-text'>
            Bắt đầu tìm kiếm
          </div>
          <SearchIcon />
        </button>
      </div>
    );
  }
}

export default Search;
