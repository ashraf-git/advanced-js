const students = [
    {id: 21, name: "Kamal" },
    {id: 6, name: "kamrul" },
    {id: 5, name: "ajmal" },
    {id: 89, name: "Kairul" }
];
const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20);
const biggerOne = students.find( s=> s.id > 20);
console.log(biggerOne);