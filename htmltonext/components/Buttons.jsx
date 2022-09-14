import React from 'react';

export function ButtonPrimary({ style, text }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      type="button"
    >
      {text}
    </button>
  );
}

export function ButtonSecondary({ style, text }) {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      type="button"
    >
      {text}
    </button>
  );
}
