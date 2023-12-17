for (var i = 0; i < 1000000; i++) {
  for (var j = 0; j < 1000; j++) {
    if(i%50000 === 0){
      console.log("i ==",i)
    }
  }
}
console.log(`document.body.innerHTML ====== begin`);
console.log(document.body.innerHTML);
console.log(`document.body.innerHTML ====== end`);