import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../services/getData';
import { setCategory, setFilter, setQuery } from '../../store/actions';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import './Header.scss';

export const Header = () => {
  const query = useSelector((state) => state.query);
  const category = useSelector((state) => state.category);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onKeyPressHandler = (e) => {
    if (e.code === 'Enter') {
      dispatch(getBooks(query, category, filter, 0));
    }
  };

  const onSearch = () => {
    dispatch(getBooks(query, category, filter, 0));
  };

  const handleInput = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const categories = [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry',
  ];
  const filters = ['relevance', 'newest'];
  return (
    <div className='header'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <h1 className='header__title'>Search for books</h1>
          </Col>
          <Col className='mt-3' xs={12} sm={8}>
            <Input
              value={query}
              onSearch={onSearch}
              handleInput={handleInput}
              onKeyPressHandler={onKeyPressHandler}
            />
          </Col>
        </Row>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} md={6}>
            <Select
              value={category}
              handleChange={handleCategory}
              options={categories}
              title={'Categories'}
            />
          </Col>
          <Col xs={12} md={6}>
            <Select
              value={filter}
              handleChange={handleFilter}
              options={filters}
              title={'Sort by'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
