const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

let obj = {
    current: [],
    init: function (array,pageSize){
        let newArr = array;
        for(let i = 0; i<array.length ; i+= pageSize){
            this.current.push(newArr.slice(i,i+pageSize));
        }
        },
        firstPage: function(){
            return this.current[0];
        },
        lastPage: function(){
            return this.current[this.current.length - 1];
        },
        getPageItems: function (n=1){
           return this.current[n-1];   
         },
         prevPage: function(n){
             return this.current[n-2];
         },
         nextPage: function(n){
            return this.current[n];
         },
         goToPage: function (n){
             return this.current[n-1];
         }
}

// obj.init(alphabetArray,4);
// console.log(obj.firstPage());
// console.log(obj.lastPage());
// console.log(obj.prevPage(2));
// console.log(obj.nextPage(0));
// console.log(obj.goToPage(1));
// console.log(obj.current[0]);
// console.log(obj.getPageItems(1));