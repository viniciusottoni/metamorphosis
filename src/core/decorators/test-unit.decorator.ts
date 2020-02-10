import { TestType } from '../enums/test-type.enum';
import { Core } from '../core';

export function TestUnit(testType: TestType, description: string) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Core.setUnit(target.constructor['name'], propertyKey, testType, description, method);
    }
}