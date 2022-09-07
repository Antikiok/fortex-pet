import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <section className="container">
      <Header />
      <div className="content">
        <div className="page">{children}</div>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
