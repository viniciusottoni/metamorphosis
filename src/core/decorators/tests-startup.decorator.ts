import { Tests } from '../tests'

export function TestsStartup() {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Tests.setStartup(target.constructor['name'], method);
    }
} 