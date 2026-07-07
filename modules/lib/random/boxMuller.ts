let buffer: any = null;

export default (x0: number, sigma: number): number =>{
    if( typeof buffer === 'number' ){
	const rand = buffer;
	buffer = null;
	return sigma*rand + x0;
    }
   
    const a0 = Math.random();
    const a1 = Math.random();
    buffer = Math.sqrt(-2*Math.log(a0))*Math.cos(2*Math.PI*a1);
    return sigma*Math.sqrt(-2*Math.log(a0))*Math.sin(2*Math.PI*a1) + x0
}
