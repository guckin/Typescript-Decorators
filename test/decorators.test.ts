import {logMethod} from '../src/decorators';

describe('Array', function() {
    describe('#indexOf()', function() {
        // TODO: fix this so it actually asserts something
        it('It logs stuff', function() {
            class TestClass {
                @logMethod
                async foo(...args: string[]): Promise<string> {
                    console.log('Heres are args you passed me:', args);
                    return 'bar'
                }
            }
            const myInstance = new TestClass();
            myInstance.foo('baz');
        });
    });
});

