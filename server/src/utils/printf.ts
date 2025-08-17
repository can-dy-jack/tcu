export function createClickableLink(url: string) {
  return `\x1B[34m\x1B]8;;${url}\x1B\\${url}\x1B]8;;\x1B\\\x1B[0m`;
}
