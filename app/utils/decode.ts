export const decodeBase64Utf8 = (base64?: string): string => {
  if (!base64) return "";

  const cleaned = base64.trim().replace(/\n/g, "");
  const binary = atob(cleaned);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(bytes);
};

export const encodeBase64Unicode = (str: string): string => {
  const utf8Bytes = new TextEncoder().encode(str);
  const binary = Array.from(utf8Bytes)
    .map((byte) => String.fromCharCode(byte))
    .join("");
  return btoa(binary);
};
