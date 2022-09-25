
  /** @jsx h */
  import { h } from 'preact';
  import { tw } from '@twind';
  import { Head } from '$fresh/runtime.ts';
  import { Page } from '@/components/index.ts';

  /*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
import {Test, Text} from "@/mc/index.ts";
import CopyCode from '@/islands/CopyCode.tsx';
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p",
      code: "code",
      br: "br",
      pre: "pre",
      h1: "h1",
      h2: "h2"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "aa 그랟 말이지 흠 나쁘지는 않지만시간이 꽤 걸리긶 나ㅔ"
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "test"
        }), "이건?", _jsx(_components.br, {}), "\n", "a", _jsx(_components.br, {}), "\n", "그렇게 큰 문제는 아니지만 흠", _jsx(_components.br, {}), "\n", "aa 오 나쁘지 않는데a", _jsx(_components.br, {}), "\n", "그래서 결국 흠 이렇게 될거라는 거지?aa", _jsx(_components.br, {}), "\n", "라는 거지 흠 나쁘지는 않는데", _jsx(_components.br, {}), "\n", "아 해결된듯aaa", _jsx(_components.br, {}), "\n", "aaaa", _jsx(_components.br, {}), "\n", "아아 애매한데", _jsx(_components.br, {}), "\n", "사용자aaaaaaaa"]
      }), "\n", "\n", _jsx(CopyCode, {}), "\n", _jsx(_components.pre, {
        children: _jsx(_components.code, {
          className: "language-js",
          children: "큰문제는 없을거에요  \n"
        })
      }), "\n", _jsxs(_components.p, {
        children: ["이렇다는 건데 흠..", _jsx(_components.br, {}), "\n", "이게 맞나??", _jsx(_components.br, {}), "\n", "애매..하단말이지", _jsx(_components.br, {}), "\n", "a", _jsx(_components.br, {}), "\n", "결국에는 흠aa애매한데", _jsx(_components.br, {}), "\n", "ㅁㅁㅁaa", _jsx(_components.br, {}), "\n", "결국에는", _jsx(_components.br, {}), "\n", "이게 시간이 걸린단 말이지a"]
      }), "\n", _jsxs(_components.p, {
        children: ["흠 애매 하단 말이지a", _jsx(_components.br, {}), "\n", _jsx(_components.code, {
          children: "그래"
        }), " 잘해 보자", _jsx(_components.br, {}), "\n", "z", _jsx(_components.br, {}), "\n", "a"]
      }), "\n", _jsx(CopyCode, {}), "\n", _jsx(_components.pre, {
        children: _jsx(_components.code, {
          className: "language-js",
          children: "let c = \"test2\";  \n"
        })
      }), "\n", _jsxs(_components.p, {
        children: ["오올", _jsx(_components.br, {}), "\n", "aa", _jsx(_components.br, {}), "\n", "aa"]
      }), "\n", _jsx(_components.h1, {
        children: "결국 그런거지aa"
      }), "\n", _jsx(Text, {}), "\n", _jsxs(_components.p, {
        children: ["gfm을 하려고 했으나 ", _jsx(_components.code, {
          children: "\\n"
        }), " 이 개행이 안됨 해서 다른 마크다운 파서를 찾다가 markdown-it", _jsx(_components.br, {}), "\n", "파서 발견aas"]
      }), "\n", _jsxs(_components.p, {
        children: ["이걸로 가자", _jsx(_components.br, {}), "\n", "aa"]
      }), "\n", _jsx(_components.h1, {
        children: "기능 구현"
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(Test, {
          children: " 이제는 기능 구현을 거의 완료 했죠 "
        }), "이 css의 문제는 css가 튄다는", _jsx(_components.br, {}), "\n", "점이다 흠aa애매한데"]
      }), "\n", _jsxs(_components.p, {
        children: ["그렇다는건", _jsx(_components.br, {}), "\n", "흥미롭다는 말이죠"]
      }), "\n", _jsx(_components.p, {
        children: "애바지 에바야 흠"
      }), "\n", _jsx(_components.h2, {
        children: "태그기반 구현"
      }), "\n", _jsxs(_components.p, {
        children: ["TIL, notes, posts로 구분하고", _jsx(_components.br, {}), "\n", "tag기반으로 또 구현"]
      }), "\n", _jsx(_components.h2, {
        children: "페이지 문제a"
      }), "\n", _jsxs(_components.p, {
        children: ["aa", _jsx(_components.br, {}), "\n", "그렇다면 결국에는 흠", _jsx(_components.br, {}), "\n", "mdx->jsx로 빌드를 했는데 이걸 page 안에 넣어야한다.", _jsx(_components.br, {}), "\n", "근데 페이지 따로 빌드한 컴포넌트 따로 하게 되면 이게 파일이 1개의 mdx", _jsx(_components.br, {}), "\n", "2개의 jsx파일이 만들어지면서 한 문서에 3파일이 있게된다.."]
      }), "\n", _jsxs(_components.p, {
        children: ["흠,,", _jsx(_components.br, {}), "\n", "한문서에 한큐에 넣으려니깐 문제는 import문도 안잡히고", _jsx(_components.br, {}), "\n", "기타 다른 컴포넌트 함수도 분리가 되는 문제가 있다..흠"]
      }), "\n", _jsx(_components.h2, {
        children: "mdx -> jsx 빌드 성능 문제"
      }), "\n", _jsxs(_components.p, {
        children: ["천줄 넘어가는 파일이 20개 정도 있으니깐 시간이 1초 정도 걸린다 흠", _jsx(_components.br, {}), "\n", "전체 파일을 다 빌드를 돌려서 발생하는 문에 인듯 하다."]
      }), "\n", _jsx(_components.p, {
        children: "해서 만약 sqlite를 fresh에서 가능할까 했는데 안되네"
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
  
  