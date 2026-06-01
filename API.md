# 計算ライブラリAPI
modules/lib/もしくはmodules/dist/に定義がある、modules/src/には演算子で書かれたファイルがある。

## operators
add(加算), sub(減算), mul(乗算), div(除算), neg(負), mod(剰余) がある。直接叩くことはほとんどない。

## functions
初等関数系、複素数にも対応済み
- sin 
- cos
- tan
- abs
- abs2
- exp
- log
- sqrt
- pow
- sinh
- cosh
- tanh
- isNaN
- isFinite
- factorial

## classes
- Complex 
- Vector
- Matrix
- ComplexVector
- ComplexMatrix

## diff(数値微分)
これらは以下のメソッドを持つオブジェクトとして返される。
- forward: 前方差分法、精度はδxに対して1次
- backward: 後方差分法、精度はδxに対して1次
- central: 中心差分法、精度はδxに対して2次

## integral(数値積分)
これらは以下のメソッドを持つオブジェクトとして返される。
- trapezoid: 台形法、（全体の誤差は $\Delta x$ に対して2次）
- simpson: シンプソン法、（全体の誤差は $\Delta x$ に対して4次。3次多項式まで厳密に積分可能）
- gaussKronrod: ガウスクロンド法、第四引数は分割数ではなく誤差`tol`
- minusInfToInf: 二重指数型積分法による$[-\infty:\infty]$の範囲での積分
- zeroToInf: 二重指数型積分法による$[0:\infity]$の範囲での積分
- minusOneToOne: 二重指数型積分法による$[-1:1]$の範囲での積分