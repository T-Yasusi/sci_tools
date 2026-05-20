const list = [
    { name: '演算子テスト', value: "op_test" }
];

export default ()=>{
    const select = document.getElementById('code-template');
    for( const item of list ){
	const option = document.createElement("option");
	option.innerHTML = item.name;
	option.value = item.value;
	select.appendChild(option);
	console.log(item);
    }
}
