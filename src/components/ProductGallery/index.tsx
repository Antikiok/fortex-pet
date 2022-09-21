import {
  memo,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import Image from 'next/image';
import ProductGalleryItem from './ProductGalleryItem';
import LeftArrow from 'assets/icons/Arrows/LeftArrow';
import RightArrow from 'assets/icons/Arrows/RightArrow';
import dynamic from 'next/dynamic';
import LeftArrowBtn from 'components/ToglleGalery/LeftArrowBtn';
import RightArrowBtn from 'components/ToglleGalery/RightArrowBtn';
import ProductGalleryCircle from 'components/ProductGalleryCircle';

const ProductGalleryCircleDynamic = dynamic(
  () => import('components/ProductGalleryCircle'),
  {
    ssr: false
  }
);

const ProductGallery = ({ tovariToRender, header }: any) => {
  const [page, setPage] = useState(0);

  const itemOnPage = 3;
  const firstIndex = page * itemOnPage;
  const lastIndex = page * itemOnPage + itemOnPage;

  const totalPages = Math.ceil(tovariToRender.length / itemOnPage);

  return (
    <>
      <div className="product_gallery">
        <div className="product_gallery-heading">{header}</div>
        <div className="product_gallery-carousel">
          <LeftArrowBtn page={page} setPage={setPage} />
          {tovariToRender.slice(firstIndex, lastIndex).map((product: any) => (
            <ProductGalleryItem
              image={product.image}
              productName={product.productName}
              countBiletos={product.countBiletos}
              article={product.article}
              key={product._id}
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
export default ProductGallery;
