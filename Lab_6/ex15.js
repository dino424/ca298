let text = '{"person":[ {"name" : "dave", "age": 24, "address":"i dont know actaully"}, {"name" : "notdave", "age": 25, "address":" still i dont know "}]}';

const obj = JSON.parse(text);

for (let person of obj.person){
    console.log(person.name);
}