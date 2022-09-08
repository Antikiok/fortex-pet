/* eslint-disable react-hooks/exhaustive-deps */
import LeftArrow from 'assets/icons/Arrows/LeftArrow';
import { ILeftArrowBtn } from 'interfaces/components.interface';
import { useCallback } from 'react';

const LeftArrowBtn = ({ page, setPage }: ILeftArrowBtn) => {
  const decreasePage = useCallback(() => {
    if (page > 0) {
      setPage(page - 1);
    }
  }, [page]);

  return (
    <button className="product_gallery-btn" onClick={decreasePage}>
      <LeftArrow />
    </button>
  );
};

export default LeftArrowBtn;
