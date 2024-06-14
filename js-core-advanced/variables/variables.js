function testVariableScopes() {
    {
        var varVariable = 'var';
        let letVariable = 'let';
        const constVariable = 'const';
        console.log('into block: '+varVariable+', '+letVariable+', '+constVariable) //into block: var, let, const
    }

    console.log('outside block: '+varVariable); //outside block: var
    console.log(letVariable); //ReferenceError: letVariable is not defined
    console.log(constVariable); //ReferenceError: constVariable is not defined
}

testVariableScopes();