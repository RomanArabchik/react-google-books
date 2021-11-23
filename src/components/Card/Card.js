import './Card.scss';

export const Card = ({ poster, title, authors, category }) => {
  return (
    <div className='cardBook'>
      <div className='cardBook__poster-wrapper d-flex justify-content-center'>
        <img className='cardBook__poster' src={poster} alt={title} />
      </div>
      <div className='cardBook__category'>{category}</div>
      <div className='cardBook__title'>{title}</div>
      <div className='cardBook__authors'>{authors}</div>
    </div>
  );
};
