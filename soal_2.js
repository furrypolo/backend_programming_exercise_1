const students = [
	{
  	id: "535250001",
    score: 98.0
  },
  {
  	id: "535250001",
    score: 45.0
  },
  {
  	id: "535250001",
    score: 97.75
  },
  {
  	id: "535250001",
    score: 99.25
  },
  {
  	id: "535250001",
    score: 78.5
  },
];

students.sort(() => {
    const place=[' '];
    const replace=[' '];
    let max=0;
    let min=0;
    let num=0;
    for(let i=0; i<students.length; i++){
        if(i===students.length);
        let max=i;
        for(let x=i; x<students.length; x++){
            if(students[x].score>students[max].score){
                place[0]=students[max];
                num=max;
                max=x;
            }
        }
        console.log(students[max].score);
        students[i]=students[max];
        students[num]=place[0];
    }

}); 

console.log(students);
