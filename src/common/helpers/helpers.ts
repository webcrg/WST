export function createId(idLength = 10) {
  let id = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < idLength; i += 1) {
    const randomCharIndex = Math.floor(Math.random() * possible.length);
    id += possible.charAt(randomCharIndex);
  }

  return id;
}
