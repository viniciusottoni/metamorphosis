import { TestType } from '../enums/test-type.enum';
import { Tests } from '../tests';

export function TestsDefinition(testType: TestType, description: string) {
    return function(target: Object) { 
        Tests.DefineTest(target['name'], testType, description);
    };
}