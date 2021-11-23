import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <Link className='button' to='/'>
        Back to the home
      </Link>
    </div>
  );
};