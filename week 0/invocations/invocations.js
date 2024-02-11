function power(a,b){
    return Math.pow(a,b);
}

function trackInvocationsAndInstances(func) {
    let invocations = 0;
    let instances = new Set();

    function wrapper(x,y) {
        invocations++;
        const instance = func(x,y);
        instances.add(instance);
        return instance;
    }

    wrapper.getInvocations = () => invocations;
    wrapper.getInstances = () => instances.size;

    return wrapper;
}

const exampleFunction = trackInvocationsAndInstances((a,b) => power(a,b));

exampleFunction(2,4);
exampleFunction(2,4);
exampleFunction(8,2);

console.log("Number of invocations:", exampleFunction.getInvocations());
console.log("Number of instances:", exampleFunction.getInstances());