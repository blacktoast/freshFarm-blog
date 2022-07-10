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
      hr: "hr",
      img: "img"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "이곳은 테스트\naaa"
      }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.p, {
        children: "tag :aa"
      }), "\n", _jsx(_components.hr, {}), "\n", _jsxs(_components.p, {
        children: ["aa\naaaa\n", _jsx(_components.img, {
          src: "'/logo.svg'",
          alt: "test"
        })]
      })]
    });
  }
}
export default MDXContent;
