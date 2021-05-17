import * as React from "react";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import { languages, highlight } from "prismjs";

import "prismjs/components/prism-json";

import "../../../scss/syntax.scss";

export type CurrentPolicyProps = {
  jsonText: string;
};

export const CurrentPolicyControl: React.FunctionComponent<CurrentPolicyProps> =
  ({ jsonText }) => {
    const [code, setCode] = useState(jsonText);

    return (
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.json, "json")}
        padding={10}
        className="container__editor"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    );
  };
