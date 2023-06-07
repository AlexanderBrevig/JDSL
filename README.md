# JDSL

https://www.youtube.com/watch?v=QwUPs5N9I6I

This is supposed to be an entry to [ThePrimeagen/ts-rust-zig-deez](https://github.com/ThePrimeagen/ts-rust-zig-deez).

Jaydeezelified version of https://github.com/ThePrimeagen/ts-rust-zig-deez/tree/master/javascript.

Since we should strive, of course, to being able to describe the entire program in the JSON only. I took the liberty to do the only sensible thing: Never pass arguments, always set global variables. I feel confident this is the way Tom would've wanted it. This way, default arguments are easily changed by simply commiting a new version of the definition, and then linking to it in the JSON. Makes sense right?

## Run

```sh
npm test
```

Expected output:

```sh
JDSL<import>: hello 04902667aad04ae4f94d5ec1ea3dfeaf1a61b0c1
JDSL<loaded>: [Function: hello]
JDSL<import>: deezJDSL 1c2df9be26aa56046718b2e2bd3c8f11d7f0fc99
JDSL<loaded>: [Function: deezJDSL]
JDSL<import>: Lexer_tokens 303512ed9c749e38ecdd123bd6a9fa425154c037
JDSL<loaded>: { ILLEGAL: 'ILLEGAL', EOF: 'EOF', IDENT: 'IDENT', INT: 'INT', FUNCTION: 'FUNCTION', LET: 'LET', EQUAL: '=', PLUS: '+', COMMA: ',', SEMI: ';', LPAREN: '(', RPAREN: ')', LBRACE: '{', RBRACE: '}' }
JDSL<import>: Lexer_tokenSet fbf5566be970b29b4b4282527872c16f649bc6b8
JDSL<loaded>: Set(14) { 'ILLEGAL', 'EOF', 'IDENT', 'INT', 'FUNCTION', 'LET', '=', '+', ',', ';', '(', ')', '{', '}' }
JDSL<import>: Lexer_keywords a11d5a1a55f1d84a991dabff4d1dc332781b429f
JDSL<loaded>: { fn: 'FUNCTION', let: 'LET' }
JDSL<import>: Lexer_this_input ebb5354b2eddebf21be14ba22cd8f45220fc4775
JDSL<loaded>: { value: '' }
JDSL<import>: Lexer_this_ch 0888fe3bee221a9083cf98e6433f956c52e11343
JDSL<loaded>: { value: ' ' }
JDSL<import>: Lexer_this_position fc15dbbf7b2f2dd54a4db961b19778a8c4f67aad
JDSL<loaded>: { value: 0 }
JDSL<import>: Lexer_constructor 6a3cedfd691b5644c120faff5a5a7e4fa3b50559
JDSL<loaded>: [Function: Lexer_constructor]
JDSL<import>: Lexer_nextToken 3f64f76fed9172200543872843aff26c8ef9f64a
JDSL<loaded>: [Function: Lexer_nextToken]
JDSL<import>: Lexer_readChar ec5d7d0fbbd221898128f3dccf562905ed03a290
JDSL<loaded>: [Function: Lexer_readChar]
JDSL<import>: Lexer_skipWhitespace 302ff56dc101f15d93a512b158d704ae8de1d737
JDSL<loaded>: [Function: Lexer_skipWhitespace]
JDSL<import>: Lexer_readIdent eae7045a9430c1ff3d437b55e8b40164539cb627
JDSL<loaded>: [Function: Lexer_readIdent]
JDSL<import>: Lexer_readInt 63256c50f8323448cebf3d950bbb204ea9ec00e0
JDSL<loaded>: [Function: Lexer_readInt]
JDSL<import>: Lexer_isAlpha 0b7467d6ddfec9288e4ee1af9c0fb05a676f4243
JDSL<loaded>: [Function: Lexer_isAlpha]
JDSL<import>: Lexer_isNumeric 054b86955e3f91bc595a9c0db995128767ec891a
JDSL<loaded>: [Function: Lexer_isNumeric]
JDSL<import>: Lexer_lookupIdent_ident b4596ba047317bf35824b70c8863799671c73603
JDSL<loaded>: { value: '' }
JDSL<import>: Lexer_lookupIdent 1c54a6f4e08f34870c1458b123a560ccab6aba86
JDSL<loaded>: [Function: Lexer_lookupIdent]
JDSL<import>: test 67f3b4252015c70294880a58c59d42c3505ce3bc
JDSL<loaded>: [Function: test]
JDSL<exec> [ 'test' ]
ALL TESTS OK
```

## Architecture

First, let's take a look at the top level.
This could also load from JSON, but I had to draw the line somewhere...

```js
async function jdsl() {
  await jdslLoad("main");
  await jdslLoad("lexer");
  await jdslLoad("lexer.test");
  await cmd("git", "checkout", "main");
}
```

Given `await jdslLoad("lexer");` here's what happens now:
* JDSL looks for `lexer.json`
* for each `key`, `value` in that json
  * run `git checkout $value`. This means each key has a git sha value corresponding to the git commit where said function was defined.
  * `import("./lexer.json")` and transfer the exported `key` to `global[key]`
  * if `key` == `__main__`, execute all entries of `value` as a global function

## TODO

There are some crucially missing features, such as executable comments. Feel free to make a PR :)
