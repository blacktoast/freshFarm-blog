/*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
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
      }), "\n", _jsxs(_components.p, {
        children: ["왜 또 안됨?", _jsx(_components.br, {}), "\n", "아 잘되네 흠 좀 반영까지 좀 느린데", _jsx(_components.br, {}), "\n", "실시간 저장이 안되네", _jsx(_components.br, {}), "\n", "흠"]
      })]
    });
  }
}
export default MDXContent;
