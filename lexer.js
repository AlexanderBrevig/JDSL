export const Lexer_readInt = () => {
  const pos = Lexer_this_position.value;
  while (Lexer_isNumeric()) {
    Lexer_readChar();
  }
  return Lexer_this_input.value.slice(pos, Lexer_this_position.value);
};
