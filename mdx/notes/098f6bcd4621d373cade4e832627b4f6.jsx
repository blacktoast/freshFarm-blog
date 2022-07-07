/*@jsxRuntime automatic @jsxImportSource preact*/
import {jsx as _jsx} from "preact/jsx-runtime";
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p"
    }, props.components);
    return _jsx(_components.p, {
      children: "aa"
    });
  }
}
export default MDXContent;
