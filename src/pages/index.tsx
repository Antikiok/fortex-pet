import Dollar from 'assets/icons/Dollar';
import FingerUp from 'assets/icons/FingerUp';
import Profit from 'assets/icons/Profit';

import NavigateBtn from 'components/NavigateBtn';
import ProductGallery from 'components/ProductGallery';
import WinnersGallery from 'components/WinnersGallery';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  // console.log(totalPages);

  const startPlay = useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      // router.replace('/signin');
    },
    []
  );

  const readMore = useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      // router.replace('/signin');
    },
    []
  );

  return (
    <section className="home">
      <div className="home_top">
        <div className="home_top-leftside">
          <div className="home_top-leftside-heading">
            Первый украинский товарный аукцион с новым дизайном
          </div>
          <div className="home_top-leftside-text">
            Присоединяйся к Fortex и выиграй машину, технику или недвижимость
          </div>
          <NavigateBtn text="Начать играть" onClick={startPlay} />
        </div>
        <div className="home_top-car">
          <Image
            src={'/static/images/yellowCar.svg'}
            width={602}
            height={269}
            alt="Yellow Car"
          />
        </div>
      </div>
      <div className="home_promo">
        <div className="home_promo-cells">
          <div className="home_promo-icon">
            <Dollar />
          </div>
          <div className="home_promo-text">
            <p>Для участия достаточно</p>
            <p>небольших вложений</p>
          </div>
          <div className="home_promo-border"></div>
        </div>
        <div className="home_promo-cells">
          <div className="home_promo-icon">
            <FingerUp />
          </div>
          <div className="home_promo-text">
            <p>Вы можете принять участие как в</p>
            <p>недорогих так и в лотах подороже</p>
          </div>
          <div className="home_promo-border"></div>
        </div>
        <div className="home_promo-cells">
          <div className="home_promo-icon">
            <Profit />
          </div>
          <div className="home_promo-text">
            <p>При выиграше вы окупаетесь в</p>
            <p>десятки, а то и сотни раз</p>
          </div>
        </div>
      </div>
      <div className="home_instruction">
        <div className="home_instruction-icon">
          <Image
            src={'/static/images/iPadIcon.svg'}
            width={480}
            height={360}
            alt="IPad"
          />
        </div>
        <div className="home_instruction-content">
          <div className="home_instruction-heading">
            Если вы впервые на нашем сайте, ознакомьтесь с инструкцией
          </div>
          <div className="home_instruction-text">
            Узнай как играть, прочитай инструкцию
          </div>
          <NavigateBtn text="Прочитать" onClick={readMore} />
        </div>
      </div>
      <div className="home_gallery">
        <ProductGallery
          arrToRender={galleryToRender}
          heading="Самые дешевые аукционы"
        />
      </div>

      <div className="home_winners">
        <WinnersGallery arrToRender={winnersToRender} />
      </div>

      <div className="home_gallery">
        <ProductGallery
          arrToRender={galleryToRender}
          heading="Популярные аукционы"
        />
      </div>
    </section>
  );
};

export default Home;

const galleryToRender = [
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 1',
    countBiletos: '19/100',
    article: 'Art:000669'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 2',
    countBiletos: '19/100',
    article: 'Art:000690'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 3',
    countBiletos: '19/100',
    article: 'Art:000612'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 4',
    countBiletos: '19/100',
    article: 'Art:000632'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 5',
    countBiletos: '19/100',
    article: 'Art:000687'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 6',
    countBiletos: '19/100',
    article: 'Art:000617'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 7',
    countBiletos: '19/100',
    article: 'Art:000643'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 8',
    countBiletos: '19/100',
    article: 'Art:000123'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 9',
    countBiletos: '19/100',
    article: 'Art:000124'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 10',
    countBiletos: '19/100',
    article: 'Art:000135'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 11',
    countBiletos: '19/100',
    article: 'Art:000148'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 12',
    countBiletos: '19/100',
    article: 'Art:000149'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 13',
    countBiletos: '19/100',
    article: 'Art:000151'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 14',
    countBiletos: '19/100',
    article: 'Art:000153'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 15',
    countBiletos: '19/100',
    article: 'Art:000155'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 16',
    countBiletos: '19/100',
    article: 'Art:000156'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 17',
    countBiletos: '19/100',
    article: 'Art:000157'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 18',
    countBiletos: '19/100',
    article: 'Art:000162'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 19',
    countBiletos: '19/100',
    article: 'Art:000163'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 20',
    countBiletos: '19/100',
    article: 'Art:000165'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 21',
    countBiletos: '19/100',
    article: 'Art:000167'
  },
  {
    image: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Товар 22',
    countBiletos: '19/100',
    article: 'Art:000168'
  }
];

const winnersToRender = [
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  },
  {
    firstName: 'Viezh',
    secondName: 'Robert',
    nickname: 'Andreyko235',
    profileImage: {
      src: '/static/images/Avatar175.png',
      alt: 'AvatarImage',
      height: 50,
      width: 50
    },
    productImage: {
      src: '/static/images/productImgae.png',
      alt: 'ProductImage',
      height: 220,
      width: 270
    },
    productName: 'Mercedes gt 63 s',
    productDescription:
      'Expectations and so far there have been no problems. expectations and so far the best of what? Expectations and so far there have been.'
  }
];
