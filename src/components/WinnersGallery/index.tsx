import { memo, useState } from 'react';
import Image from 'next/image';

import RightArrowBtn from 'components/ToglleGalery/RightArrowBtn';
import LeftArrowBtn from 'components/ToglleGalery/LeftArrowBtn';
import dynamic from 'next/dynamic';

const ProductGalleryCircleDynamic = dynamic(
  () => import('components/ProductGalleryCircle'),
  {
    ssr: false
  }
);

const WinnersGallery = ({ arrToRender }: any) => {
  const [page, setPage] = useState(0);

  const itemOnPage = 3;
  const firstIndex = page * itemOnPage;
  const lastIndex = page * itemOnPage + itemOnPage;

  const totalPages = Math.ceil(arrToRender.length / itemOnPage);
  return (
    <>
      <div className="winners_gallery">
        <h2 className="winners_gallery-heading">Последние победители</h2>
        <div className="winners_gallery-carousel">
          <LeftArrowBtn page={page} setPage={setPage} />

          {arrToRender.slice(firstIndex, lastIndex).map((winner: any) => (
            <div className="winners_gallery-cells" key={winner._id}>
              <div className="winners_gallery-profile">
                <div className="winners_gallery-avatar">
                  <Image
                    src={winner.profileImage.src}
                    height={winner.profileImage.height}
                    width={winner.profileImage.width}
                    alt={winner.profileImage.alt}
                  />
                </div>
                <div className="winners_gallery-personal">
                  <div className="winners_gallery-fullname">
                    {`${winner.firstName} ${winner.secondName}`}
                  </div>
                  <div className="winners_gallery-nickname">
                    {winner.nickname}
                  </div>
                </div>
              </div>
              <div
                className="winners_gallery-image"
                style={{
                  height: winner.productImage.height,
                  width: winner.productImage.width
                }}
              >
                <Image
                  src={winner.productImage.src}
                  alt={winner.productImage.alt}
                  height={winner.productImage.height}
                  width={winner.productImage.width}
                />
              </div>
              <div className="winners_gallery-content">
                <div className="winners_gallery-title">
                  {winner.productName}
                </div>
                <div className="winners_gallery-description">
                  {winner.productDescription}
                </div>
              </div>
            </div>
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

export default memo(WinnersGallery);
