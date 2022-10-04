import Dollar from 'assets/icons/Dollar';
import FingerUp from 'assets/icons/FingerUp';
import Profit from 'assets/icons/Profit';
import axios from 'axios';

import NavigateBtn from 'components/NavigateBtn';
import ProductGallery from 'components/ProductGallery';
import WinnersGallery from 'components/WinnersGallery';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styles from '../styles/Home.module.css';

interface IHome {
  tovariToRender: string[];
  winnersToRender: string[];
}

const Home = ({ tovariToRender, winnersToRender }: IHome) => {
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
          tovariToRender={tovariToRender}
          heading="Самые дешевые аукционы"
        />
      </div>

      <div className="home_winners">
        <WinnersGallery arrToRender={winnersToRender.data} />
      </div>

      <div className="home_gallery">
        <ProductGallery
          tovariToRender={tovariToRender}
          heading="Популярные аукционы"
        />
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/tovari');
  const tovari = await res.json();
  const winners = await axios.get('http://localhost:3000/api/winners');

  return {
    props: {
      tovariToRender: tovari.data || [],
      winnersToRender: winners.data || [],
      fallback: false
    }
  };
};

export default Home;
