import Loupe from 'assets/icons/Loupe';
import { memo, useState } from 'react';

const SearchBox = () => {
  const [] = useState();
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <>
      <form action="" className="search_box" onSubmit={(e) => HandleSubmit(e)}>
        <input type="text" className="search_box-input" />
        <button className="search_box-btn" type="submit">
          <Loupe />
        </button>
      </form>
    </>
  );
};

export default memo(SearchBox);
