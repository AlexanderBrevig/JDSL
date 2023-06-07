export const Lexer_readIdent = () => {
  const pos = Lexer_this_position.value;
  while (Lexer_isAlpha()) {
    Lexer_readChar();
  }
  return Lexer_this_input.value.slice(pos, Lexer_this_position.value);
};
