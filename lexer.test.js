export const test = () => {
  Lexer_this_input.value = "=+(){},;";
  Lexer_constructor();

  const tokens = [
    Lexer_tokens.EQUAL,
    Lexer_tokens.PLUS,
    Lexer_tokens.LPAREN,
    Lexer_tokens.RPAREN,
    Lexer_tokens.LBRACE,
    Lexer_tokens.RBRACE,
    Lexer_tokens.COMMA,
    Lexer_tokens.SEMI,
  ];

  for (const token of tokens) {
    const nextToken = Lexer_nextToken();
    assert(nextToken == token, "Tokens must be equal");
  }
  console.log("ALL TESTS OK");
};
