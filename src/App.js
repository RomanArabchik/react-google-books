import './App.scss';
import { Header } from './components/Header/Header';
import { BooksList } from './components/BooksList/BooksList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookPage } from './components/Pages/BookPage/BookPage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container>
          <Routes>
            <Route path='/' exact element={<BooksList />} />
            <Route path='/:bookId' exact element={<BookPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;