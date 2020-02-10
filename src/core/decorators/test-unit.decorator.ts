import { TestType } from '../enums/test-type.enum';
import { Tests } from '../tests';

export function TestUnit(testType: TestType, description: string) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Tests.setUnit(target.constructor['name'], propertyKey, testType, description, method);
    }
}