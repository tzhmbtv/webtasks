const t1 = document.querySelector("#tf1");
const t2 = document.querySelector("#tf2");
const t3 = document.querySelector("#tf3");
const t4 = document.querySelector("#tf4");
const t5 = document.querySelector("#tf5");
const t6 = document.querySelector("#tf6");
const t7 = document.querySelector("#tf7");
const t8 = document.querySelector("#tf8");
const t9 = document.querySelector("#tf9");
function calc(){
	const det1 = parseInt(t1.value)*parseInt(t5.value)*parseInt(t9.value) - parseInt(t1.value)*parseInt(t6.value)*parseInt(t8.value);
	const det2 = parseInt(t1.value)*parseInt(t5.value)*parseInt(t9.value) - parseInt(t1.value)*parseInt(t6.value)*parseInt(t8.value);
	const det3 = parseInt(t1.value)*parseInt(t5.value)*parseInt(t9.value) - parseInt(t1.value)*parseInt(t6.value)*parseInt(t8.value);
	let det = det1 - det2 + det3;
	document.querySelector("#res").innerHTML = det;
}
document.querySelector("#b1").addEventListener('click',calc);