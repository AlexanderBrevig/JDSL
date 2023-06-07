export const Lexer_readChar = () => {
  Lexer_this_position.value++;
  Lexer_this_ch.value = Lexer_this_position.value >= Lexer_this_input.value.length ? "" : Lexer_this_input.value[Lexer_this_position.value];
};
