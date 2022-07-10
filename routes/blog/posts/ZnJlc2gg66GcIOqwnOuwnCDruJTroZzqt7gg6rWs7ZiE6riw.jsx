/*@jsxRuntime automatic @jsxImportSource preact*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";
export const test = 'Tes 이곳은 블로그';
import Test from '@/mdxComponents/Test.tsx';
export const A = () => {
  return _jsx("div", {
    children: _jsx("h1", {
      children: "test"
    })
  });
};
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
      children: [_jsxs(_components.p, {
        children: ["hihihi ", test, " ", _jsx(A, {}), "\naaaa"]
      }), "\n", _jsx(Test, {})]
    });
  }
}
export default MDXContent;
