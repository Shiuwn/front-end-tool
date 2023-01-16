import type { FC } from "react";
import Translation from "./Translation";
import { parsers } from './parser'

const URLCode: FC = () => {
  const parser = parsers.url
  return <Translation {...parser}></Translation>
}

export default URLCode