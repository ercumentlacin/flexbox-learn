import Router from '../../routes/Router';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import Main from '../Layout/Main';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </>
  );
}
