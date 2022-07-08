/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { useState } from 'preact/hooks';

interface InputProps {}

export const Input = ({}: InputProps) => {
  const [st, setState] = useState('');

  return (
    <input
      onChange={(e) => {
        console.log(e);
      }}
    ></input>
  );
};
