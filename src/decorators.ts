
type MethodLoggingInfo = {
    methodName: string,
    parentClass: Object;
    argumentsPassed: Array<any>;
    executionTime: number;
    result: any;
}

function formatMethodLoggerMessage(methodLoggingInfo: MethodLoggingInfo):string {
    return `method: ${methodLoggingInfo.methodName}\n` +
            `class: ${methodLoggingInfo.parentClass}\n` +
            `arguments: ${methodLoggingInfo.argumentsPassed.join(', ')}\n` +
            `execution time: ${methodLoggingInfo.executionTime}\n` +
            `result: ${methodLoggingInfo.result}`
}

export function logMethod(target, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = (...args) => {
        const beforeTime: number = Date.now();
        const returnValue = original.apply(this, args);
        const afterTime: number = Date.now()
        console.log(
            formatMethodLoggerMessage(
                {
                    methodName: propertyKey,
                    parentClass: target.constructor.name,
                    argumentsPassed: args,
                    executionTime: afterTime - beforeTime,
                    result: returnValue
                }
            )
        );
        return returnValue;
    }
}
