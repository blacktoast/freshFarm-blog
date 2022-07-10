import { compile } from 'mdx2';
import {
  decode as utf8Decode,
  encode as utf8Encode,
} from 'https://deno.land/std@0.82.0/encoding/utf8.ts';
import { crypto } from 'https://deno.land/std@0.147.0/crypto/mod.ts';
import {
  decode,
  encode,
} from 'https://deno.land/std@0.147.0/encoding/base64.ts';

import { exists } from 'https://deno.land/std@0.147.0/fs/mod.ts';

import * as gfm from 'https://esm.sh/remark-gfm@3.0.1';

const baseDir = './blog/';

export const buildMdx = async () => {
  const dirs = ['posts', 'notes'];
  //먼자 한글파일부터 되는지 보자
  const test = dirs.map(async (dir) => {
    const path = `./blog/${dir}`;
    for await (const dirEntry of Deno.readDir(path)) {
      const body = await Deno.readTextFile(`${path}/${dirEntry.name}`);
      const compiled = await compile(body, {
        jsxImportSource: 'preact',
        remarkPlugins: [gfm],
      });
      const encodeFileName = encode(dirEntry.name.split('.')[0]);
      const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);
      const isFile = await exists(`./routes/blog/${dir}/${encodeFileName}.jsx`);
      if (isFile) {
        const existFile = await Deno.readTextFile(forWriteFileName);

        if (JSON.stringify(existFile) !== JSON.stringify(compiled.value)) {
          await Deno.writeTextFile(
            `./routes/blog/${dir}/${encodeFileName}.jsx`,
            compiled
          );
        }
      }
    }
  });

  await Promise.all(test);
  console.log('finish');
};

// buildMdx();
('/*@jsxRuntime automatic @jsxImportSource preact*/\nimport {jsx as _jsx} from "preact/jsx-runtime";\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = props.components || ({});\n  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n    children: _jsx(_createMdxContent, {})\n  })) : _createMdxContent();\n  function _createMdxContent() {\n    const _components = Object.assign({\n      p: "p"\n    }, props.components);\n    return _jsx(_components.p, {\n      children: "aaa\\naaa"\n    });\n  }\n}\nexport default MDXContent;\n');
('/*@jsxRuntime automatic @jsxImportSource preact*/\nimport {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "preact/jsx-runtime";\nfunction MDXContent(props = {}) {\n  const {wrapper: MDXLayout} = props.components || ({});\n  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n    children: _jsx(_createMdxContent, {})\n  })) : _createMdxContent();\n  function _createMdxContent() {\n    const _components = Object.assign({\n      p: "p",\n      hr: "hr",\n      img: "img"\n    }, props.components);\n    return _jsxs(_Fragment, {\n      children: [_jsx(_components.p, {\n        children: "이곳은 테스트\\naaa"\n      }), "\\n", _jsx(_components.hr, {}), "\\n", _jsx(_components.p, {\n        children: "tag :aa"\n      }), "\\n", _jsx(_components.hr, {}), "\\n", _jsxs(_components.p, {\n        children: ["aa\\naaaa\\n", _jsx(_components.img, {\n          src: "\'/logo.svg\'",\n          alt: "test"\n        })]\n      })]\n    });\n  }\n}\nexport default MDXContent;\n');
