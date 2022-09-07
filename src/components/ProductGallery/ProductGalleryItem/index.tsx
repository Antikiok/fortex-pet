import { memo } from 'react';
import Image from 'next/image';
import { IProductGalleryItem } from 'interfaces/components.interface';

const ProductGalleryItem = ({
  image,
  productName,
  countBiletos,
  article
}: IProductGalleryItem) => {
  return (
    <div className="product_gallery_item">
      <div
        className="product_gallery_item-image"
        style={{ height: image.height, width: image.width }}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </div>
      <div className="product_gallery_item-content">
        <div className="product_gallery_item-cells">
          <div className="product_gallery_item-cells-text">{productName}</div>
          <div className="product_gallery_item-cells-biletos">
            {countBiletos}
          </div>
        </div>
        <div className="product_gallery_item-article">{article}</div>
      </div>
    </div>
  );
};

export default memo(ProductGalleryItem);
