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
      a: "a"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "가볼까??\n가보자고\n가본다고?\naaa"
      }), "\n", _jsx("img", {
        src: "/image/Test.png",
        alt: ""
      }), "\n", _jsx(_components.p, {
        children: _jsx(_components.a, {
          href: "test",
          children: "tes"
        })
      }), "\n", _jsx(_components.p, {
        children: "[[test]]"
      })]
    });
  }
}
export default MDXContent;
