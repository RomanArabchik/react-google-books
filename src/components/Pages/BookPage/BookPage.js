import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getOneBook } from '../../../services/getData';
import placeholderImg from '../../../img/default-book.png';
import './BookPage.scss';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Error } from '../Error/Error';

export const BookPage = () => {
  const book = useSelector((state) => state.oneBook);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const { bookId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneBook(bookId));
  }, [dispatch, bookId]);

  const renderBook = () => {
    if (!book?.volumeInfo) return;

    let image = placeholderImg;
    let title = '';
    let description = '';
    let category = '';
    let authors = '';

    if (book.volumeInfo.title) {
      title = book.volumeInfo.title;
    }

    if (book.volumeInfo.imageLinks) {
      image = book.volumeInfo.imageLinks.thumbnail;
    }

    if (book.volumeInfo.categories) {
      category = book.volumeInfo.categories.join(', ');
    }

    if (book.volumeInfo.description) {
      description = book.volumeInfo.description.replace(/<\/?[a-zA-Z]+>/gi, '');
    }

    if (book.volumeInfo.authors) {
      authors = book.volumeInfo.authors.join(', ');
    }

    return (
      <div className='book'>
        <Row>
          <Col lg={6} xl={4}>
            <div className='book__img-wrapper'>
              <img className='book__img' src={image} alt={title} />
            </div>
          </Col>
          <Col xl={8}>
            <div className='book__content-wrapper'>
              <div className='book__category'>{category}</div>
              <div className='book__title'>{title}</div>
              <div className='book__authors'>{authors}</div>
              <Link className='button' to='/'>
                Back to the books
              </Link>
            </div>
          </Col>
          <Col xs={12}>
            {description.length > 0 ? (<div className='book__description'>{description}</div>) : null}
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner animation='border' />
        </div>
      ) : error ? (
        <Error />
      ) : (
        renderBook()
      )}
    </>
  );
};
