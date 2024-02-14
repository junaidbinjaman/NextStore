type StringMap<T> = {
    [P in keyof T]: string
}

function show1(args: StringMap<{id, name}>) {
    console.log(args)
}

function show2(args: StringMap<string>) {
    console.log(args)
}

show1({id: '', name: 'asds'});
show2('hello');
