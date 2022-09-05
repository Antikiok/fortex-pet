import Dollar from 'assets/icons/Dollar';
import FingerUp from 'assets/icons/FingerUp';
import Profit from 'assets/icons/Profit';
import YellowCar from 'assets/icons/YellowCar';
import NavigateBtn from 'components/NavigateBtn';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const startPlay = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    router.replace('/signin');
  };
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
          <YellowCar />
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
    </section>
  );
};

export default Home;
