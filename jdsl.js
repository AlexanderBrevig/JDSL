/*

Inspired by the true brilliance of Tom

*/

import { readFileSync } from "fs";
import { spawn } from "child_process";

function cmd(...command) {
  let p = spawn(command[0], command.slice(1));
  let result = "";
  return new Promise((resolveFunc) => {
    p.stdout.on("data", (x) => { result += x; });
    p.stderr.on("data", (x) => { result += x; });
    p.on("exit", (_) => { resolveFunc(result); });
  });
}

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));

async function jdslLoad(dsl) {
  const jdsl = loadJSON("./" + dsl + ".json");
  for (const [key, value] of Object.entries(jdsl)) {
    if (key == "__main__") {
      console.log("JDSL<exec>", value);
      global[value]();
    } else {
      console.log("JDSL<import>:", key, value);
      await cmd("git", "checkout", value);
      const mod = await import(`./${dsl}.js?v=${value}`);
      global[key] = mod[key];
      console.log("JDSL<loaded>:", global[key]);
    }
  }
}

async function jdsl() {
  await jdslLoad("main");
  await jdslLoad("lexer");
  await jdslLoad("lexer.test");
  await cmd("git", "checkout", "main");
}

jdsl();

