import { Core } from '../core';

export function TestData(...args: any[]) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Core.setMethodToUnit(target.constructor['name'], propertyKey, method, args);
    }
}