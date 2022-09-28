
      import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/index.ts';

  /*@jsxRuntime automatic @jsxImportSource preact*/
import {jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      br: "br"
    }, props.components);
    return _jsxs(_components.p, {
      children: ["test", _jsx(_components.br, {}), "\n", "결국 우리는 이제느", _jsx(_components.br, {}), "\n", "aaa"]
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
  
  