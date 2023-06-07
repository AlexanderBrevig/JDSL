export const Lexer_isAlpha = () => {
  return Lexer_this_ch.value >= "a" && Lexer_this_ch.value <= "z" || Lexer_this_ch.value >= "A" && Lexer_this_ch.value <= "Z" || Lexer_this_ch.value === "_";
};
