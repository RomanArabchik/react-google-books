import './Select.scss';
export const Select = ({ value, handleChange, options, title }) => {
  return (
    <div className='select d-flex align-items-center mt-2'>
      <div className='select__title'>{title}</div>
      <div className='select__wrapper col-sm-8 col-6'>
        <select
          value={value}
          onChange={handleChange}
          className='select__selector'
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
