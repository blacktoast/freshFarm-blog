import Counter from '../islands/Counter.tsx';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
import Input from '@/islands/Input.tsx';
import { useState } from 'preact/hooks';
import { Header } from '@/components/Header.tsx';
import { Page } from '@/components/index.ts';

export default function Home() {
  const [st, setState] = useState('');
  const change = (e: any) => {
    alert(e);
  };

  return (
    <>
      <div>
        <Header></Header>
        <Page>
          testtesttest
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </Page>
      </div>
    </>
  );
}
