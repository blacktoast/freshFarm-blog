import { Head } from "$fresh/runtime.ts";
import { Page } from "@/components/index.ts";

/*@jsxRuntime automatic @jsxImportSource preact*/
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from "preact/jsx-runtime";
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
      h2: "h2",
      p: "p",
      br: "br",
    }, props.components);
    return _jsxs(_Fragment, {
      children: [
        _jsx(_components.h2, {
          children: "tset",
        }),
        "\n",
        _jsxs(_components.p, {
          children: [
            "aa 왜 또 안됨? 아 잘되네 흠 좀 반영까지 좀 느린데 실시간 저장이 안되네",
            _jsx(_components.br, {}),
            "\n",
            "흠aa애매한데 결국은 오 나쁘지는 않는데 오호라aa 뭐 그런가지 흠 18ms 라 좀 길긴하네ㅇㅇ",
          ],
        }),
        "\n",
        _jsxs(_components.p, {
          children: [
            "dhfhgk 나쁮진 않는데a",
            _jsx(_components.br, {}),
            "\n",
            "이렇게 되면",
          ],
        }),
        "\n",
        _jsx("div", {
          children: "tet",
        }),
        "\n",
        _jsxs(_components.p, {
          children: ["아 이거좀 귀찬흥ㄴ데", _jsx(_components.br, {}), "\n", "aaa"],
        }),
      ],
    });
  }
}

export default function Home(props) {
  const tmp = props.url.href.split("/");
  console.log(tmp[tmp.length - 1]);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/vs2015.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js">
        </script>
        <link rel="stylesheet" href="/post.css"></link>
        <script>hljs.initHighlightingOnLoad();</script>
      </Head>
      <Page>
        <MDXContent />
      </Page>
    </div>
  );
}
