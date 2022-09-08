import { IProductGalleryCircle } from 'interfaces/components.interface';
import { memo } from 'react';

const ProductGalleryCircle = ({
  totalPages,
  page,
  setPage
}: IProductGalleryCircle) => {
  const tooglePage = (index: number) => {
    return setPage(index);
  };

  return (
    <>
      <div className="product_gallery-circle">
        {[...Array(totalPages)].map((element, index) => {
          return (
            <button
              className="product_gallery-circle-item"
              key={index}
              onClick={() => tooglePage(index)}
              style={{ backgroundColor: page === index ? '#f36f37' : '' }}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default memo(ProductGalleryCircle);
