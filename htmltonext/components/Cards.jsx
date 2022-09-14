import React from 'react';
import Link from 'next/link';
import ButtonPrimary from './Buttons';

export default function Card({ header, body, link, linktext }) {
  return (
    <div>
      <div className="card-header">{header}</div>
      <div className="card-header">{body}</div>
      <Link className="link" href={link}>
        {linktext}
      </Link>
    </div>
  );
}
