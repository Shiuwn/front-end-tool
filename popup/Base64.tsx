import type { FC } from "react";
import Translation from "./Translation";
import { parsers } from "./parser";

const Base64: FC = () => {
  const parser = parsers.base64
  return (
    <Translation {...parser} />
  )

}

export default Base64