const fspromises = require('fs').promises;
const path  = require ('path');

const files = async () => {
try{
let newdata = await fspromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');

  await fspromises.writeFile(path.join(__dirname, 'starter.txt',), newdata);

newdata = Number(newdata);
newdata += 2;


console.log( typeof newdata);
console.log(newdata);





}catch(err){
console.error(err);
}
}

files()

console.log('Hellio world')



function strings(source){
  var out = source.replace(/[^0-9]/g, '')
  return out;
}

parseInt([0], 10);