export default function caesarCipher(string, factor) {
  if (!string) {
    if (string === '') throw new Error('string is empty');
    throw new ReferenceError('argument missing: string');
  }
  if (!factor && factor !== 0)
    throw new ReferenceError('argument missing: factor');
  if (factor === 0)
    return string
      .split('')
      .map((c) => c.toUpperCase())
      .join('');

  const alphabets = '.,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '.split('');

  return string
    .split('')
    .map((char) => {
      let charIndex = alphabets.findIndex((c) => c.toLowerCase() === char);
      let newIndex = (charIndex + factor) % alphabets.length;
      return newIndex >= 0
        ? alphabets[newIndex]
        : alphabets[alphabets.length + newIndex];
    })
    .join('');
}
