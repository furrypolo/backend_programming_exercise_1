console.log("Hello!");

for(let i=2; i<=1000; i++){
    count=0;
    for(let x=2; x<=i; x++){
        if(i===x){
            continue;
        }
        y=i%x;
        if(y===0){
            count+=1;
        }
    }
    if(count===0){
        console.log(i);
    }
}