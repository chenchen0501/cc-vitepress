# jsconfig.json基础配置

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["src/**/*"]
}
```

::: warning 注意
本章只提供最基础的配置，请自行扩展
:::