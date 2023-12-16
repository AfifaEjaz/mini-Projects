function getValue(num) {
    document.getElementById('input').value += num;
}


function getResult() {
    const value = document.getElementById('input').value
    const res = eval(value)
    console.log(res);
    document.getElementById('input').value = res;

}

function clearResult() {
   document.getElementById('input').value = '';
}

function removeNum() {
   const value = document.getElementById('input').value;
   const res = value.slice(0,value.length-1)
   document.getElementById('input').value = res;
 }