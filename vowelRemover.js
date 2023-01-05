const shortcut = (string) => {
  return string.replace(/[aiueo]/g, "");
  // ?   So We Need To Remove Vowel So I took replace method word using regex
};

console.log(shortcut("Hello World"));
