import { TestType } from '../enums/test-type.enum';
import { Core } from '../core';

export function TestsDefinition(testType: TestType, description: string) {
    return function(target: Object) { 
        Core.defineTest(target['name'], testType, description);
        Core.run();
    };
}