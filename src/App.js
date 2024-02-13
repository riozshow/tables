import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNavbar from './components/layout/Navbar/Navbar';
import TablesList from './components/features/TablesList/TablesList';
import { Container } from 'react-bootstrap';
import TablePage from './components/pages/TablePage/TablePage';
import Footer from './components/layout/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <PageNavbar />
        <Container className='p-3'>
          <Routes>
            <Route path='/' element={<TablesList />} />
            <Route path='table/:tableId' element={<TablePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
