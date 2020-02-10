import { Core } from '../core'

export function TestsStartup() {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        Core.setStartup(target.constructor['name'], method);
    }
} 