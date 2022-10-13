import { Head } from '$fresh/runtime.ts';
import { Page } from '@/components/index.ts';

/*@jsxRuntime automatic @jsxImportSource preact*/
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from 'preact/jsx-runtime';
import CopyCode from '@/islands/CopyCode.tsx';
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || ({});
  return MDXLayout
    ? _jsx(
      MDXLayout,
      Object.assign({}, props, {
        children: _jsx(_createMdxContent, {}),
      }),
    )
    : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: 'p',
      br: 'br',
      pre: 'pre',
      code: 'code',
    }, props.components);
    return _jsxs(_Fragment, {
      children: [
        _jsxs(_components.p, {
          children: ['test', _jsx(_components.br, {}), '\n', 'ㅁ'],
        }),
        '\n',
        _jsx(_components.p, {
          children: 'aaaa',
        }),
        '\n',
        '\n',
        _jsx(CopyCode, {}),
        '\n',
        _jsx(_components.pre, {
          children: _jsx(_components.code, {
            children: 'test  \n',
          }),
        }),
        '\n',
        _jsx(CopyCode, {}),
        '\n',
        _jsx(_components.pre, {
          children: _jsx(_components.code, {
            className: 'language-js',
            children:
              'let a = \'test\';  \nㅁㅁ;  \nlet a = \'test\';  \nlet a = \'test\';  \nlet a = \'test\';  \n',
          }),
        }),
        '\n',
        _jsx(CopyCode, {}),
        '\n',
        _jsx(_components.pre, {
          children: _jsx(_components.code, {
            className: 'language-js',
            children:
              'let a = \'test\';  \nlet a = \'test\';  \nlet a = \'test\';  \nlet a = \'test\';  \nlet a = \'test\';  \n',
          }),
        }),
        '\n',
        _jsxs(_components.p, {
          children: ['aa', _jsx(_components.br, {}), '\n', 'testaf'],
        }),
      ],
    });
  }
}

export default function Home(props) {
  const tmp = props.url.href.split('/');
  console.log(tmp[tmp.length - 1]);

  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css'
        />
        <link rel='stylesheet' href='/post.css'></link>
      </Head>
      <Page>
        <MDXContent />
      </Page>
    </div>
  );
}
