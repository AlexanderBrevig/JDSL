export const Lexer_constructor = () => {
  Lexer_this_position.value = 0;
  Lexer_this_ch.value = Lexer_this_input.value[Lexer_this_position.value];
};
