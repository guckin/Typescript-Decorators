import {logMethod} from './src/decorators';

class TestClass {
    @logMethod
    foo(...args): string {
        console.log('im in the function');
        return 'bar'
    }
}
const myInstance = new TestClass();
myInstance.foo('baz');
