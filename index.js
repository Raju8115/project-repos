function append(value){
    const result = document.getElementById("result")
    result.value += value;
}

function clearResult(){
    const result = document.getElementById("result")
    result.value = '';
}
function Calculate(){
    const result = document.getElementById('result')
    try {
        result.value = eval(result.value);
        
      } catch (error) {
        result.value = 'Error';
      }
}
function dlt(){
    const result = document.getElementById("result");
    let old_exp = result.value;
    let new_exp = Array.from(old_exp)
    new_exp.pop();
    let last = new_exp.join("")
    result.value = last;

}
