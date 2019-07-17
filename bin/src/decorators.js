"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatMethodLoggerMessage(methodLoggingInfo) {
    return "method: " + methodLoggingInfo.methodName + "\n" +
        ("class: " + methodLoggingInfo.parentClass + "\n") +
        ("arguments: " + methodLoggingInfo.argumentsPassed.join(', ') + "\n") +
        ("execution time: " + methodLoggingInfo.executionTime + "\n") +
        ("result: " + methodLoggingInfo.result);
}
function logMethod(target, propertyKey, descriptor) {
    var _this = this;
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var beforeTime = Date.now();
        var returnValue = original.apply(_this, args);
        var afterTime = Date.now();
        console.log(formatMethodLoggerMessage({
            methodName: propertyKey,
            parentClass: target.constructor.name,
            argumentsPassed: args,
            executionTime: afterTime - beforeTime,
            result: returnValue
        }));
        return returnValue;
    };
}
exports.logMethod = logMethod;
