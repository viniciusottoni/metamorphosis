import { Tests } from '../tests';

export function TestData(...args: any[]) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Tests.setMethodToUnit(target.constructor['name'], propertyKey, method, args);
    }
}