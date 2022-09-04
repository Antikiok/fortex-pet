import BurgerMenu from 'assets/icons/BurgerMenu';
import Vkontakte from 'assets/icons/Vkontakte';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerMenu } from 'utils/routes';

const Header = () => {
  const router = useRouter();

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
          <div className="header_second-search">Search Bar</div>
          <div className="header_second-profile"> Profile</div>
          <div className="header_second-basket">Basket</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
