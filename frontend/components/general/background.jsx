import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div id='background'>
      <img src={ window.background } />
    </div>
  );
}