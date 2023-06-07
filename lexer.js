export const Lexer_isNumeric = () => {
  return Lexer_this_ch.value >= "0" && Lexer_this_ch.value <= "9";
};
