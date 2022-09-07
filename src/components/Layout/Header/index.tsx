import Account from 'assets/icons/Account';
import Basket from 'assets/icons/Basket';
import BurgerMenu from 'assets/icons/BurgerMenu';
import Vkontakte from 'assets/icons/Vkontakte';
import SearchBox from 'components/SearchBox';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { headerMenu } from 'utils/routes';

const Header = () => {
  const router = useRouter();

  const [isShow, setIsShow] = useState<boolean>(false);

  const toogleBasket = (e: any) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header_first">
        <div className="header_first-leftside">
          <div className="header_first-navbar">
            <BurgerMenu />
          </div>
          {
            <Link href={'./'}>
              <a className="header_first-logo">FORTEX</a>
            </Link>
          }
        </div>
        <div className="header_first-rightside">
          <div className="header_first-social">
            <Vkontakte />
          </div>
          <div className="header_first-social">
            <Vkontakte />
          </div>
          <div className="header_first-social">
            <Vkontakte />
          </div>
        </div>
      </div>
      <div className="header_second">
        <div className="header_second-menu">
          {headerMenu.map((menu) => (
            <Link href={menu.url} key={menu.url} passHref={true}>
              <a
                className="header_second-menu-item"
                style={
                  router.pathname === `/${menu.url}`
                    ? {
                        borderBottom: '2px solid #f65130'
                      }
                    : {}
                }
              >
                {menu.title}
              </a>
            </Link>
          ))}
        </div>
        <div className="header_second-rightside">
          <div className="header_second-search">
            <SearchBox />
          </div>
          <button className="header_second-icon">
            <Account />
          </button>
          <button
            className="header_second-icon"
            onClick={(e) => toogleBasket(e)}
          >
            <Basket />
          </button>
          <div className="header_second-basket-value">
            {isShow && '9 765 р.'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
