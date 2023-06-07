export const Lexer_lookupIdent = () => {
  return Lexer_keywords[Lexer_lookupIdent_ident.value] || { type: Lexer_tokens.IDENT, value: Lexer_lookupIdent_ident.value };
};
