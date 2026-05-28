const list = [
    { name: 'テスト', value: "test/test.ts" },
    { name: '演算子オーバーロード', value: "test/operator.ts" },
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
