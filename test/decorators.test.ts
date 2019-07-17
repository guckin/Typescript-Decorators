import {logMethod} from '../src/decorators';

class TestClass {
    @logMethod
    async foo(...args: string[]): Promise<string> {
        console.log('Heres are args you passed me:', args);
        return 'bar'
    }
}
const myInstance = new TestClass();
myInstance.foo('baz');
