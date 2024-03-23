export function getUrl(url: string) {
  return url.startsWith("/") ? `https://binhtran432k.com/${url.slice(1)}` : url;
}
