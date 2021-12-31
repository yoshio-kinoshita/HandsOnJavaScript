const name = (name) => { return `hello ${name}`};
console.log(name('joco'));
const decorateName = (decorator, name) => { return `hello ${decorator}${name}` };
console.log(decorateName("Mrs.", "Joco"));