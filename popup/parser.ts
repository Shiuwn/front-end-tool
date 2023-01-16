import { Base64 } from 'js-base64'
export interface Parser<T = any, U = any> {
  encode: (raw: T) => U,
  decode: (encoded: U) => T
}
export const parsers: Record<string, Parser> = {
  url: {
    encode: (str: string) => window.encodeURIComponent(str),
    decode: (str: string) => window.decodeURIComponent(str)
  },
  base64: {
    encode: (str: string) => Base64.encode(str),
    decode: (str: string) => Base64.decode(str),
  }
}
