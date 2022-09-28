
      import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/index.ts';

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
      pre: "pre",
      code: "code",
      br: "br",
      a: "a"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "ㅅㄷㄴㅅaaa"
      }), "\n", "\n", _jsx(CopyCode, {}), "\n", _jsx(_components.pre, {
        children: _jsx(_components.code, {
          className: "language-js",
          children: "let a = test;  \ns;  \nlet b = test;  \n"
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
      }), "\n", _jsx(CopyCode, {}), "\n", _jsx(_components.pre, {
        children: _jsx(_components.code, {
          children: "  \n```  \n\n\n<CopyCode />\n\n```\n  \n```  \n\n\n<CopyCode />\n\n```\n"
        })
      })]
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
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
          <link rel="stylesheet" href="/post.css"></link>
          <script>hljs.initHighlightingOnLoad();</script>
        </Head>
        <Page>
          <MDXContent/>
        </Page>
      </div>
    );
  }
  
  