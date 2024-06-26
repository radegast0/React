import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type }) => {
  const base =
    'focus-bg-yellow-300 text-sm inline-block rounded-full bg-yellow-500 font-semibold uppercase text-stone-800 transition-colors duration-150 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none disabled:cursor-not-allowed ';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}{' '}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
