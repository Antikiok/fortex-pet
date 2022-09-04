import Link from 'next/link';
import { useRouter } from 'next/router';

import { footerMenu } from 'utils/routes';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className="footer">
        <div className="footer-menu">
          {footerMenu.map((menu) => (
            <Link href={menu.url} key={menu.url} passHref={true}>
              <a
                className="footer-menu-item"
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
      </div>
      <div className="footer-logo">FORTEX</div>
    </>
  );
};

export default Footer;
