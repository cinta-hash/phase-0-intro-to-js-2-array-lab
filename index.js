// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name){
    const AppendCat = cats.push("Ralph");

  }
  function destructivelyPrependCat(name){
    const prependCat = cats.unshift("Bob");
  }

  function destructivelyRemoveLastCat(name){
    const removeLast = cats.splice(2);
  }
  function destructivelyRemoveFirstCat(name){
    const removeFirst = cats.splice(0,1);
  }

  
  function appendCat(name){
    return [...cats, name];
  }
  function prependCat(name){
    return [name, ...cats];
  }
  function removeFirstCat(){
    return cats.slice(1);
  }
  function removeLastCat(){
    return cats.slice(0, cats.length -1);

  }
