// Debugging using concole.log()


// 'Bad Code'

console.log(volvo.getName() + '(' + volvo.getYear() + ')');


// 'Good code'

console.log('%c My new cars:', 'color: green; font-weight: bold')
console.log({Volvo, BMW, Mercedes})

// Console table
console.table([Volvo, BMW, Mercedes])

// Console timer
console.time('looper')

let i = 0
while (i < 1000000) {
    i ++
}

console.timeEnd('looper')

// Console trace
const deleteMe = () => console.trace('delete function');

deleteMe();
deleteMe();
