## Lv1
### 04. [Flex](https://chakra-ui.com/docs/components/flex)

[図で理解するFlexbox](https://zenn.dev/umatoma/articles/e6c4051f4c882d)

#### Flexの特徴
* コンテナの幅に空きがあった場合にwidth/heightが広がる(flex-grow)
* コンテナの幅に空きがない場合にwidth/heightが縮まる(flex-shrink)
* 一次元の配置をgrid/floatよりも楽に書ける
  * 二次元に対する配置はできない
* 縦横方向でのセンタリングを行いたい場合、Flexが簡単

#### flex-wrap
コンテナに付与する。  
デフォルトでは`flex-wrap: nowrap`となっており、アイテムの幅の合計がコンテナの幅を超えた場合に折り返しをせず、アイテムの幅を縮小(Shrink)する。折り返しを行いたい場合は`flex-wrap: wrap`とする。

`flex-grow`は`flex-shrink`

#### flex-grow
アイテムに付与する。  
`flex-wrap: nowrap`の状態でコンテナの幅に対してアイテムの幅の合計が小さかった場合に、空いている幅に対してアイテムが広がる割合の按分を決める。  
空いた幅が100pxで`flex-grow: 1`がついたアイテムが2つある場合、それぞれ50pxずつ広がる。  
空いた幅が300pxで`flex-grow: 1`がついたアイテムが2つ、`flex-grow: 2`がついたアイテムが2つある場合、300 / (1 + 1 + 2 + 2) * `flex-growの値` pxずつ広がる  
デフォルトは0のため、空きがあっても広がらない。

#### flex-shrink
アイテムに付与する。  
`flex-wrap: nowrap`の状態でコンテナの幅に対してアイテムの幅の合計が大きかった場合に、足りない幅に対してアイテムが縮まる割合の按分を決める。  
足りない幅が100pxで`flex-shrink: 1`がついたアイテムが2つある場合、それぞれ50pxずつ縮まる。  
足りない幅が100pxで`flex-shrink: 1`がついたアイテムが3つ、`flex-shrink: 2`がついたアイテムが2つあった場合、100 / (1 + 1 + 1 + 2) * `flex-shrink` pxずつ縮まる。  
(memo: アイテムの幅が異なる場合、100 / (1 * w1 + 1 * w2 + 1 * w3 + 2 * w4) * wn * `flex-shrink` px といったように各アイテムのサイズに因る計算になる。`flex-grow`の場合は各アイテムのサイズには因らない。)  
デフォルトは1のため、足りなかったら縮まるが、コンテンツのサイズよりは縮まらない。