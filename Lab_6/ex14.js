let text = '{"person":[ {"name" : "dave", "age": 24, "address":"i dont know actaully"}]}';

const obj = JSON.parse(text);

for (let person of obj.person){
    console.log(person.name);
    console.log(person.age);
    console.log(person.address);
}