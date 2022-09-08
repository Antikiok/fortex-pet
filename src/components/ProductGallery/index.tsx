import { memo, MouseEventHandler, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import ProductGalleryItem from './ProductGalleryItem';
import LeftArrow from 'assets/icons/Arrows/LeftArrow';
import RightArrow from 'assets/icons/Arrows/RightArrow';
import dynamic from 'next/dynamic';
import LeftArrowBtn from 'components/ToglleGalery/LeftArrowBtn';
import RightArrowBtn from 'components/ToglleGalery/RightArrowBtn';

const ProductGalleryCircleDynamic = dynamic(
  () => import('components/ProductGalleryCircle'),
  {
    ssr: false
  }
);

const ProductGallery = ({ arrToRender, heading }: any) => {
  const [page, setPage] = useState(0);

  const itemOnPage = 3;
  const firstIndex = page * itemOnPage;
  const lastIndex = page * itemOnPage + itemOnPage;

  const totalPages = Math.ceil(arrToRender.length / itemOnPage);

  return (
    <>
      <div className="product_gallery">
        <div className="product_gallery-heading">{heading}</div>
        <div className="product_gallery-carousel">
          <LeftArrowBtn page={page} setPage={setPage} />
          {arrToRender.slice(firstIndex, lastIndex).map((product: any) => (
            <ProductGalleryItem
              image={product.image}
              productName={product.productName}
              countBiletos={product.countBiletos}
              article={product.article}
              key={product.article}
            />
          ))}
          <RightArrowBtn
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
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
