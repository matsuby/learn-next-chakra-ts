## Lv1
### 02. [Style Props](https://chakra-ui.com/docs/styled-system/style-props)

#### 基本
Chakra UIは`Box`などの用意されたコンポーネントに対してPropsを渡していくことでスタイリングを行う。  
`margin`、`padding`、`color`のように全てのコンポーネントに共通のPropsもあれば、特定のコンポーネントにしか存在しない専用のPropsもある。まずは共通のものを一通りマスターしよう。

ここで渡すProps名として、CSS側と対応した「camelCaseのProps」又は「`m`や`p`といった省略記法」を用いることができる。  
慣れてくれば「左右に8ポイント分の余白を取ろう」=>「Propsに`mx={8}`を渡そう」といった脳内変換をすぐに行うことができるようになり、コード補完との相乗効果もあって、少ないタイプ数でコードを書くことが出来るようになって生産性が上がる。そのため、省略記法は積極的に使っていきたい。

Tailwindも似たようなCSSユーティリティクラスの構成となっているが、クラス名の組み合わせでこれを実現しているため、Propsとしては`className`が長く複雑化しがち。逆にChakra UIではProps1つ1つとしては複雑な指定は少ないものの、指定するPropsの数自体が純粋に多くなる。

#### marginの指定(props => css)
`margin` => `margin`  
`m` => `margin`  
`mx` => `margin-inline-start + margin-inline-end`  
`mt` => `margin-top`  
`marginLeft` => `margin-left`  

#### paddingの指定(props => css)
`padding` => `padding`  
`p` => `padding`  
`py` => `padding-top + padding-bottom`  
`pb` => `padding-bottom`  
`paddingRight` => `padding-right`  

#### デフォルトテーマにおける余白周りの設定について
https://chakra-ui.com/docs/styled-system/theme#spacing
> By default, Chakra includes a comprehensive numeric spacing scale inspired by Tailwind CSS. The values are proportional, so 1 spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers.

デフォルトの1スペース単位は0.25rem=4pxに変換される。
例えば`<Box mx={4} />`なら要素の左右に16px分の余白をとる。