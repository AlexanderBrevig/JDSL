export const Lexer_skipWhitespace = () => {
  while (Lexer_this_ch.value === " " || Lexer_this_ch.value === "\t" || Lexer_this_ch.value === "\n" || Lexer_this_ch.value === "\r") {
    Lexer_readChar();
  }
};
