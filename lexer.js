export const Lexer_nextToken = () => {
  Lexer_skipWhitespace();

  let token = Lexer_tokenSet.has(Lexer_this_ch.value) ? (Lexer_this_ch.value) : null;

  if (token === null) {
    if (Lexer_isAlpha()) {
      Lexer_lookupIdent_ident = Lexer_readIdent();
      token = Lexer_lookupIdent();
      return token;
    }

    if (Lexer_isNumeric()) {
      token = Lexer_tokens.INT;
      const intVal = Lexer_readInt();
      return { type: token, value: intVal };
    }

    token = Lexer_this_ch.value === "" ? Lexer_tokens.EOF : Lexer_tokens.ILLEGAL;
  }

  Lexer_readChar();

  return token;
};
