import './Input.scss';

export const Input = ({ value, onSearch, handleInput, onKeyPressHandler }) => {
  return (
    <div>
      <div className='search d-flex align-items-center'>
        <input
          type='text'
          value={value}
          onChange={handleInput}
          onKeyPress={onKeyPressHandler}
          className='search__input'
          placeholder='Search...'
        />
        <div onClick={onSearch} className='search__icon'>
          <i className='fa fa-search'></i>
        </div>
      </div>
    </div>
  );
};
