
  /** @jsx h */
  import { h } from 'preact';
  import { tw } from '@twind';
  import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';
  import { Head } from '$fresh/runtime.ts';
  import * as jsxP from 'https://esm.sh/preact@10.9.0/jsx-runtime';

  /*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
import CopyCode from '@/islands/CopyCode.tsx';
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      br: "br",
      pre: "pre",
      code: "code",
      span: "span",
      a: "a"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsxs(_components.p, {
        children: ["가볼까??", _jsx(_components.br, {}), "\n", "가보자고", _jsx(_components.br, {}), "\n", "가본다고?", _jsx(_components.br, {}), "\n", "aaa"]
      }), "\n", "\n", _jsx(CopyCode, {}), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-js",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " a = test;  \ns;  \n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " b = test;  \n"]
        })
      }), "\n", _jsxs(_components.p, {
        children: ["daf", _jsx(_components.br, {}), "\n", "agdd"]
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "../test",
          children: "tes"
        })
      }), "\n", _jsx(_components.p, {
        children: "[[test]]"
      }), "\n", _jsx(_components.p, {
        children: "aa"
      }), "\n", _jsx(_components.p, {
        children: "사실 그리"
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-go",
          children: ["\n\n", _jsx(_components.span, {
            className: "hljs-string",
            children: "``"
          }), _jsx(_components.span, {
            className: "hljs-string",
            children: "`  \n\n\n`"
          }), _jsx(_components.span, {
            className: "hljs-string",
            children: "``"
          }), "  \n\n\n", _jsx(_components.span, {
            className: "hljs-string",
            children: "``"
          }), _jsx(_components.span, {
            className: "hljs-string",
            children: "`  \n\n\n`"
          }), _jsx(_components.span, {
            className: "hljs-string",
            children: "``"
          }), "  \n"]
        })
      })]
    });
  }
}


  export default function Home(props: PageProps) {
    const tmp = props.url.href.split('/');
    console.log(tmp[tmp.length - 1]);

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
  
  