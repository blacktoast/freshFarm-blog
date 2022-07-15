
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
    return _jsxs(_Fragment, {
      children: [_jsxs(_components.p, {
        children: ["오 이게 되나?", _jsx(_components.br, {}), "\n", "오 나름 괜찮은듯?"]
      }), "\n", _jsx(_components.p, {
        children: "1초 정도 걸리네 흠.."
      }), "\n", _jsx(_components.p, {
        children: "이게 2번 돌아서 좀 느리긴 하네ㅁ"
      }), "\n", _jsxs(_components.p, {
        children: ["css도 가끔 튀네 흠.", _jsx(_components.br, {}), "\n", "왜 css는 가끔 튀는거지??", _jsx(_components.br, {}), "\n", "나쁘진 않는데 왜 css 가 가끔 튀는거지?? 흠aa애매한데", _jsx(_components.br, {}), "\n", "왜일까"]
      }), "\n", _jsxs(_components.p, {
        children: [_jsx("span", {
          style: {
            backgroundColor: 'red'
          },
          children: "test "
        }), " css도 잘먹네 후 그러면 이제", _jsx(_components.br, {}), "\n", "남은게 뭐가 남았지??"]
      }), "\n", _jsx(_components.p, {
        children: "좀 느린데 왜 이러지??실시간 반응성은 좀 구리네 흠"
      }), "\n", _jsx(_components.p, {
        children: "아니왜 이럼?"
      })]
    });
  }
}


  export default function Home(props: PageProps) {
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
  
  