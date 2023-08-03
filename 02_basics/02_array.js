const marvel_heros = ["thor","IronMan","spiderMan"];
const dc_heros = ["superMan","flash","batMan"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)


// spread operator

const all_New_Heros = [...marvel_heros,...dc_heros];

console.log(all_New_Heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const  real_Array = another_array.flat(Infinity);


console.log(Array.isArray("Hitesh"));
