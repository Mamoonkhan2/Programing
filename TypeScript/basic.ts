function areYouPlayingBanjo(name: string):string {
  // Implement me
  let char:number = name.charCodeAt(0);
  console.log(char);
  
  if(char==82 || char == 114 ){
    return name + " plays banjo"
  }else{
  return name + " does not play banjo";
    
  }
}

console.log(areYouPlayingBanjo("ramoon"))
