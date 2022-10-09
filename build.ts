import { pageGen } from "@/pagegen.tsx";
import { compile } from "mdx2";

import { encode } from "base64";

import { ensureDir, ensureFile } from "https://deno.land/std@0.147.0/fs/mod.ts";
import gfm from "https://esm.sh/remark-gfm@3.0.1";
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4?bundle";

// 태그 파싱, 작업중

const metaTagParsing = (rawTexts: string[]) => {
  let flag = false;
  let tags: string[] = [];
  let description = "";
  rawTexts.map((text) => {
    if (text === "---" || text.slice(0, 3) === "---") {
      flag = !flag;
    }
    if (flag) {
      const splitBlocks = text.split(":");
      const keyword = splitBlocks[0];
      if (keyword === "tags") {
        tags = splitBlocks[1]
          .split("#")
          .slice(1)
          .map((a) => a.trim());
      }
      if (keyword === "description") {
        description = splitBlocks[1].trim();
      }
    }
  });
  return [tags, description];
};

const hardEnter = (rawTexts: string[]) => {
  let isCodeBlock = false;
  let alreadyCodeBlockDeclare = false;
  return rawTexts
    .map((text) => {
      const reqForPasing = /```/;
      if (reqForPasing.test(text)) {
        if (!isCodeBlock) {
          isCodeBlock = true;
          const codeFileName = text.split(" ")[1];
          // console.log(codeFileName);
          let result = ``;
          if (!alreadyCodeBlockDeclare) {
            result +=
              `import CopyCode from '@/islands/CopyCode.tsx';\n\n<CopyCode />\n\n${text}`;
            alreadyCodeBlockDeclare = true;
          } else result += `<CopyCode />\n\n${text}`;

          return result;
        }
        if (isCodeBlock) isCodeBlock = false;
      }

      if (text.length === 0 && !isCodeBlock) return "\n";
      else return `${text}  `;
    })
    .join("\n");
};

const mdxParsingForCodeBlock = () => {};

//mdx파일을 읽어서

const removeExportCodeToComplied = (compiled: string) => {
  return compiled
    .split("\n")
    .filter((line) => {
      return line !== "export default MDXContent;";
    })
    .join("\n");
};
interface newDB {
  [key: string]: object;
}

export const buildMdx = async () => {
  const baseDir = "blog";
  console.time("mdx build time ");
  const dirs = ["posts", "notes"];
  await ensureFile(`./mdxIndex.json`);
  let newDB: newDB = {};

  const db = JSON.parse(await Deno.readTextFile("./mdxIndex.json"));

  const fileNames: any = {
    posts: [],
    notes: [],
  };

  const promises = dirs.map(async (dir) => {
    const path = `./${baseDir}/${dir}`;

    for await (const dirEntry of Deno.readDir(path)) {
      const readFileName = `${path}/${dirEntry.name}`;
      const body = await Deno.readTextFile(readFileName);
      const rawTexts = body.split("\n");
      const [tags, description] = metaTagParsing(rawTexts);
      console.log(tags, description);
      const fileStat = await Deno.stat(`${path}/${dirEntry.name}`);
      const hashedFileName = encode(dirEntry.name.split(".")[0]);
      const forWriteFileName = `./routes/blog/${dir}/${hashedFileName}.jsx`;

      const fileInfo = {
        title: dirEntry.name,
        tags,
        description,
        path: forWriteFileName,
        atime: fileStat.atime,
        mtime: Date.parse(String(fileStat.mtime) || String(new Date())),
        birthtime: fileStat.birthtime,
      };

      fileNames[dir].push(hashedFileName);

      newDB = {
        ...newDB,
        [dir]: { ...newDB[dir], [hashedFileName]: fileInfo },
      };

      // console.log(removeExportCodeToComplied(String(compiled.value)));
      // await Deno.writeTextFile(`./routes/blog/posts/test.jsx`, page);

      // console.log(evalFile.default);
      // const encodeFileName = encode(dirEntry.name.split('.')[0]);
      // const forWriteFileName = `./routes/blog/${dir}/${encodeFileName}.jsx`;
      // console.log(hashFileName, string);
      // console.log(Deno.statSync(`${path}/${dirEntry.name}`));
      // console.log(dirEntry.name);

      await ensureFile(forWriteFileName);
      const existFileContent = await Deno.readFile(forWriteFileName);
      // console.log(`./routes/blog/${dir}/${encodeFileName}.jsx`);

      //mapping json 에 미리 값이 없기 문에 없다 라고 인식함
      //즉 mdxindex파일이 만들어지기 전에 처음 렌더링이 돌때에 dir도 없고 hashedFileName도 없을것
      // ㅇ

      const existsFileEditedTime = db[dir]
        ? db[dir][hashedFileName]?.mtime || 0
        : 0;

      if (
        String(existsFileEditedTime) !== String(fileInfo.mtime) ||
        existFileContent.length === 0
      ) {
        const enterBody = hardEnter(rawTexts);

        const compiled = await compile(enterBody, {
          jsxImportSource: "preact",
          remarkPlugins: [gfm, remarkFrontmatter],
        });

        const page = pageGen(
          removeExportCodeToComplied(String(compiled.value)),
        );
        await Deno.writeTextFile(forWriteFileName, page);
      }

      // // }
    }
  });

  await Promise.all(promises);

  const removeFilePromises = dirs.map(async (dir) => {
    await ensureDir(`./routes/blog/${dir}`);

    if (!db[dir] || !newDB[dir]) {
      await Deno.remove(`./routes/blog/${dir}`, { recursive: true });
      return;
    }

    Object.keys(db[dir]).map(async (key) => {
      if (Object.keys(newDB[dir]).includes(key) === false) {
        const name = db[dir][key].path;
        await Deno.remove(name);
        console.log(name);
      }
    });
  });

  await Deno.writeTextFile(`./mdxIndex.json`, JSON.stringify(newDB));

  await Promise.all(removeFilePromises);
  console.log("end");

  console.timeEnd("mdx build time ");
};

// buildMdx();

const makeJSX = () => {};
