/*@jsxRuntime automatic @jsxImportSource preact*/
import {jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
export const test = 'Tes 이곳은 블로그';
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p"
    }, props.components);
    return _jsxs(_components.p, {
      children: [test, " hi"]
    });
  }
}
export default MDXContent;
