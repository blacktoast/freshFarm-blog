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
      p: "p",
      br: "br",
      em: "em",
      ul: "ul",
      li: "li",
      input: "input",
      code: "code",
      blockquote: "blockquote",
    }, props.components);
    return _jsxs(_Fragment, {
      children: [
        _jsxs(_components.p, {
          children: [
            "testte",
            _jsx(_components.br, {}),
            "\n",
            _jsx(_components.em, {
              children: "test",
            }),
          ],
        }),
        "\n",
        _jsxs(_components.ul, {
          className: "contains-task-list",
          children: [
            "\n",
            _jsxs(_components.li, {
              className: "task-list-item",
              children: [
                _jsx(_components.input, {
                  type: "checkbox",
                  disabled: true,
                }),
                " ",
                "ate",
              ],
            }),
            "\n",
          ],
        }),
        "\n",
        _jsx(_components.p, {
          children: _jsx(_components.code, {
            children: "rwe",
          }),
        }),
        "\n",
        _jsxs(_components.blockquote, {
          children: [
            "\n",
            _jsx(_components.p, {
              children: "test",
            }),
            "\n",
          ],
        }),
        "\n",
        _jsxs(_components.p, {
          children: [
            "이러먼 생각보다 긴데",
            _jsx(_components.br, {}),
            "\n",
            "결국 우리는 이제느",
            _jsx(_components.br, {}),
            "\n",
            "aaa",
            _jsx(_components.br, {}),
            "\n",
            "dd",
          ],
        }),
        "\n",
        _jsx(_components.p, {
          children: "오호라",
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
