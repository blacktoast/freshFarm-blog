
  /** @jsx h */
  import { h } from 'preact';
  import { tw } from '@twind';
  import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
  import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/Page.tsx';
  import { Input } from '@/components/Input.tsx';
  import * as jsxP from 'https://esm.sh/preact@10.9.0/jsx-runtime';

  /*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
import {Test} from '@/mc/index.ts';
export const A = () => {
  return _jsx("div", {
    children: _jsx("h1", {
      children: "test"
    })
  });
};
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      h2: "h2",
      p: "p",
      br: "br"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.h2, {
        children: "tset"
      }), "\n", "\n", "\n", _jsx(A, {}), "\n", _jsx(Test, {}), "\n", _jsxs(_components.p, {
        children: ["aa 왜 또 안됨? 아 잘되네 흠 좀 반영까지 좀 느린데 실시간 저장이 안되네", _jsx(_components.br, {}), "\n", "흠aa애매한데 결국은 오 나쁘지는 않는데 오호라aa"]
      }), "\n", _jsx("div", {
        children: "tet"
      }), "\n", _jsxs(_components.p, {
        children: ["아 이거좀 귀찬흥ㄴ데", _jsx(_components.br, {}), "\n", "aa"]
      })]
    });
  }
}


  export default function Home() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
          <link rel="stylesheet" href="/post.css"></link>
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <MDXContent/>
      </div>
    );
  }
  
  