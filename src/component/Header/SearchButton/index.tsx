import React, { useState } from 'react';
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
type IProps = { clickHandle?: (e: React.MouseEvent) => void };
const Search: React.FC<IProps> = (props) => {
  const [width, setWidth] = useState(300);
  return (
    <div>
      <button
        id='searchbtn01'
        onClick={props.clickHandle}
        className={classNames(
          'button-search',
          'button-hover',
          'flex-row-space-btw',
          { 'button-border': true }
        )}
        style={{ width: width }}
      >
        <div className='button-search-item button-search-text'>
          Bắt đầu tìm kiếm
        </div>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
