#!/usr/bin/env -S deno run -A --watch=static/,routes/

import { buildMdx } from "./build.ts";
import dev from "$fresh/dev.ts";

await buildMdx();

console.log("build finish");
await dev(import.meta.url, "./main.ts");
