/* eslint-disable react-hooks/exhaustive-deps */

import RightArrow from 'assets/icons/Arrows/RightArrow';
import { IRightArrowBtn } from 'interfaces/components.interface';
import { useCallback } from 'react';

const RightArrowBtn = ({ page, setPage, totalPages = 0 }: IRightArrowBtn) => {
  const increasePage = useCallback(() => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  }, [page]);

  return (
    <button
      className="product_gallery-btn"
      onClick={increasePage}
      style={{ position: 'absolute', right: 0 }}
    >
      <RightArrow />
    </button>
  );
};

export default RightArrowBtn;
