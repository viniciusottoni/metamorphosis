import { TestType } from '../enums/test-type.enum';
import { Tests } from '../tests';

export function TestsDefinition(testType: TestType, description: string) {
    return function(target: Object) { 
        Tests.defineTest(target['name'], testType, description);
    };
}