import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <section className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </section>
  );
};

export default Layout;
