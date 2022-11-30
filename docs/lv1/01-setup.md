## Lv1
### 01. Next.js + Chakra UI + TypeScript プロジェクトの初期化

#### [Next.js](https://nextjs.org/docs#automatic-setup)初期化 (examples: [hello-world](https://github.com/vercel/next.js/tree/canary/examples/hello-world))

```bash
yarn create next-app -e hello-world learn-next-chakra-ts
cd learn-next-chakra-ts
rm -rf pages/day

# 依存関係の最新化
npx npm-check-updates -u
yarn

# VSCode設定
mkdir .vscode
cat << EOF > .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": ["source.fixAll.eslint"],
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
EOF

# devサーバー起動確認
yarn dev
# $ next
# ready - started server on 0.0.0.0:3000, url: http://localhost:3000
# event - compiled client and server successfully in 400 ms (140 modules)
```

### [Chakra-UI](https://chakra-ui.com/getting-started/nextjs-guide), [React Icons](https://react-icons.github.io/react-icons/)追加

```bash
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion react-icons

### _app.tsx作成
cat << EOF > pages/_app.tsx
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
EOF
```
