import { memo, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import ProductGalleryItem from './ProductGalleryItem';
import LeftArrow from 'assets/icons/Arrows/LeftArrow';
import RightArrow from 'assets/icons/Arrows/RightArrow';
import dynamic from 'next/dynamic';

const ProductGalleryCircleDynamic = dynamic(
  () => import('./ProductGalleryCircle'),
  {
    ssr: false
  }
);

const ProductGallery = ({ arrToRender }: any) => {
  const [page, setPage] = useState(0);

  const itemOnPage = 3;
  const firstIndex = page * itemOnPage;
  const lastIndex = page * itemOnPage + itemOnPage;

  const totalPages = Math.ceil(arrToRender.length / itemOnPage);

  const sliceData = (totalPages: any, currentPage: any) => {
    let firstIndex = 0;
    currentPage > 2 ? (firstIndex = currentPage - 3) : (firstIndex = 0);

    [Array(totalPages).slice(firstIndex, currentPage)];
  };

  // console.log(sliceData(totalPages, page));

  const decreasePage = useCallback(() => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  }, [page]);

  const increasePage = useCallback(() => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  }, [page]);

  return (
    <>
      <div className="product_gallery">
        <div className="product_gallery-heading">Самые дешевые аукционы</div>
        <div className="product_gallery-carousel">
          <button className="product_gallery-btn" onClick={decreasePage}>
            <LeftArrow />
          </button>
          {arrToRender.slice(firstIndex, lastIndex).map((product: any) => (
            <ProductGalleryItem
              image={product.image}
              productName={product.productName}
              countBiletos={product.countBiletos}
              article={product.article}
              key={product.article}
            />
          ))}
          <button
            className="product_gallery-btn"
            onClick={increasePage}
            style={{ position: 'absolute', right: 0 }}
          >
            <RightArrow />
          </button>
        </div>
      </div>
      <ProductGalleryCircleDynamic
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default memo(ProductGallery);
