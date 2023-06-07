export const Lexer_lookupIdent = () => {
  return Lexer_keywords[Lexer_lookupIdent_ident] || { type: Lexer_tokens.IDENT, value: Lexer_lookupIdent_ident };
};
