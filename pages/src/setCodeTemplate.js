const list = [
    { name: 'Γ関数(グラフ描画)',   value: "graphics/specialFunc/gamma.ts" },
    { name: '逆行列計算(ガウスの消去法)', value: 'example/gaussianElimination.ts' },
    { name: 'MathJaxテスト', value: "example/mathJax.ts" },
    { name: 'ルジャンドル関数(グラフ描画)', value: "graphics/specialFunc/legendre.ts" },
    { name: 'ラゲール関数(グラフ描画)',     value: "graphics/specialFunc/laguerre.ts" },
    { name: 'エルミート関数(グラフ描画)',   value: "graphics/specialFunc/hermite.ts" },
    { name: 'ローレンツアトラクタ',     value: "graphics/lorenz.ts" },
    { name: 'ヒストグラム(正規分布)',     value: "graphics/hist/gauss.ts" },
];

export default ()=>{
    const select = document.getElementById('code-template');
    for( const item of list ){
	const option = document.createElement("option");
	option.innerHTML = item.name;
	option.value = item.value;
	select.appendChild(option);
//	console.log(item);
    }
}
