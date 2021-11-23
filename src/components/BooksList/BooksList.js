import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import placeholderImg from '../../img/default-book.png';
import { Link } from 'react-router-dom';
import { getMoreBooks } from '../../services/getData';
import { setIndex } from '../../store/actions';

export const BooksList = () => {
  const books = useSelector((state) => state.books);
  const loading = useSelector((state) => state.loading);
  const total = useSelector((state) => state.total);
  const query = useSelector((state) => state.query);
  const category = useSelector((state) => state.category);
  const filter = useSelector((state) => state.filter);
  const startIndex = useSelector((state) => state.startIndex);
  const disable = useSelector((state) => state.disable);
  const dispatch = useDispatch();

  const renderCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner animation='border' />
        </div>
      );
    } else {
      const cards = books.map((book) => {
        let image = placeholderImg;
        let category = '';
        let authors = '';
        let title = book.volumeInfo.title;
        if (book.volumeInfo.authors && book.volumeInfo.authors.length > 0) {
          if (book.volumeInfo.authors) {
            authors = book.volumeInfo.authors.join(', ');
            if (authors.length > 60) {
              authors = authors.slice(0, 60) + '...';
            }
          }
        }

        if (book.volumeInfo.imageLinks) {
          image = book.volumeInfo.imageLinks.thumbnail;
        }

        if (book.volumeInfo.categories) {
          category = book.volumeInfo.categories;
        }

        if (book.volumeInfo.title && book.volumeInfo.title.length > 60) {
          title = book.volumeInfo.title.slice(0, 60) + '...';
        }

        return (
          <Col key={book.id} className='mt-3' xl={3} md={6} lg={4}>
            <Link to={`/${book.id}`}>
              <Card
                poster={image}
                category={category}
                title={title}
                authors={authors}
              />
            </Link>
          </Col>
        );
      });
      return <Row className='d-flex justify-content-space-around'>{cards}</Row>;
    }
  };

  const loadMore = () => {
    dispatch(setIndex(startIndex + 30));
    dispatch(getMoreBooks(query, category, filter, startIndex));
  };

  return (
    <div>
      {total === '' ? null : (
        <div className='d-flex justify-content-center mt-2'>
          Found {total} results
        </div>
      )}
      {total === 0 ? (
        <div className='d-flex justify-content-center mt-2'>
          Nothing was found for this query
        </div>
      ) : (
        <>
          {renderCards()}
          {books.length > 0 && books.length < total ? (
            <Row className='justify-content-center mt-3 mb-3'>
              <button disabled={disable} onClick={loadMore} className='button'>
                Load more
              </button>
            </Row>
          ) : null}
        </>
      )}
    </div>
  );
};
