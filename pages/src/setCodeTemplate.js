const list = [
    { name: 'テスト', value: "test" }
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
