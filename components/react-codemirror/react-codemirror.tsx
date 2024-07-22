"use client";

import { useCallback, useState } from "react";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const  ReactCodemirror = () => {
  const initialState = "" +
      "// filename='test'\n" +
      "// Follow this setup guide to integrate the Deno language server with your editor:\n" +
      "// https://deno.land/manual/getting_started/setup_your_environment\n" +
      "// This enables autocomplete, go to definition, etc.\n" +
      "\n" +
      "import { serve } from \"https://deno.land/std@0.177.1/http/server.ts\"\n" +
      "\n" +
      "serve(async () => {\n" +
      "  return new Response(\n" +
      "    `\"Hello from Edge Functions!\"`,\n" +
      "    { headers: { \"Content-Type\": \"application/json\" } },\n" +
      "  )\n" +
      "})\n" +
      "\n" +
      "// To invoke:\n" +
      "// curl 'http://localhost:<KONG_HTTP_PORT>/functions/v1/hello' \\\n" +
      "//   --header 'Authorization: Bearer <anon/service_role API key>'"
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    console.log("val:", val);
    console.log("viewUpdate:", viewUpdate);
    setValue(val);
  }, []);
  return (
    <CodeMirror
        aria-multiline={true}
      value={value}
      extensions={[javascript({ jsx: true, typescript: true })]}
      onChange={onChange}
    />
  );
}

export default ReactCodemirror;
