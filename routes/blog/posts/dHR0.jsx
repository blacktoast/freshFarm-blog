/*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      p: "p"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.p, {
        children: "ttest\ntstt"
      }), "\n", _jsx(_components.p, {
        children: "결국은 나도\n이제 이렇게 되었다는것을 알수있다."
      })]
    });
  }
}
export default MDXContent;
