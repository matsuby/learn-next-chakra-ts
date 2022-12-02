## Lv1
### 03. [レスポンシブデザイン](https://chakra-ui.com/docs/styled-system/responsive-styles)

#### ブレークポイント
```
// These are the default breakpoints
const breakpoints = {
  sm: '30em',    // 480px以上
  md: '48em',    // 768px以上
  lg: '62em',    // 992px以上
  xl: '80em',    // 1280px以上
  '2xl': '96em', // 1536px以上
}

// Internally, we transform to this
const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']
```

Chakra-UIはレスポンシブデザインのために`min-width`のメディアクエリが使われている。  
ブレークポイントは、`base`(=`sm`未満)を含めるとデフォルトで6種類用意されている。

`StyleProps`としてブレークポイントを渡す方法として配列記法とオブジェクト記法があるが、
`base`と`sm`を区別して設定したいケースが少なそうなことと、分かりやすさの点で、オブジェクト記法が好ましいと思う。(個人の感想。後述)

#### [配列記法](https://chakra-ui.com/docs/styled-system/responsive-styles#the-array-syntax)
```
<Box bg='red.200' w={[300, 400, 500]}>
  This is a box
</Box>
```

> 300px: From 0em upwards
> 400px: From 30em upwards
> 500px: From 48em upwards

注意:
> To skip certain breakpoints, you can pass null to any position in the array to avoid generating unnecessary CSS.

とあるため、`base`と`sm`を共通にしたい場合は`w={[300, null, 400, 500]}`といったように明示的にnullを渡してスキップさせる必要がある。  
(もしくは`w={[300, 300, 400, 500]}`のように同じ値を渡す)  

以下のオブジェクト記法では`base`を設定して`sm`を省略すれば良いため、見通しが良いと思われる。  

#### [オブジェクト記法](https://chakra-ui.com/docs/styled-system/responsive-styles#the-object-syntax)
```
<Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
  This is responsive text
</Text>
```

> base: From 0em upwards
> md: From 48em upwards
> lg: From 62em upwards

#### [Show / Hide](https://chakra-ui.com/docs/components/show-hide)コンポーネント
```
<Show breakpoint='(max-width: 400px)'>
  <Box>This text appears only on screens 400px and smaller.</Box>
</Show>
```

```
<>
  <Show above='sm'>
    <Box>This text appears at the "sm" value screen width or greater.</Box>
  </Show>
  <Hide below='md'>
    <Box>This text hides at the "md" value screen width and smaller.</Box>
  </Hide>
</>
```

Show/Hideコンポーネントを使って、特定の表示幅での表示/非表示を切り替えることができる。
条件は`breakpoint`でメディアクエリを直接書くか、`above='sm'`、`below='md'`などブレークポイント名の表示幅以上/以下で指定する。

#### メモ
`sm`に超巨大な値を設定すれば配列記法でもnullを渡さずにスキップは可能のようだが、流石にハックすぎる...

```
const theme = extendTheme({
  breakpoints: {
    sm: 2 ** 32,
  }
})
```
