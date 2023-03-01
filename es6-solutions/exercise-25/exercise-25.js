function log(v){
    if(v){ return 'ok';}
    else{ return 'no'; }
}

const input = [true, false, 'true', 'false', {}, [], NaN, 0, 1, undefined, null]
const answers = ['ok', 'no', 'ok', 'ok', 'ok', 'ok', 'no', 'no', 'ok', 'no', 'no']

for(const idx in input){
    console.log(input[idx], log(input[idx])===answers[idx])
}