import { TestType } from '../../../src/core/enums/test-type.enum';
import { TestsDefinition } from '../../../src/core/decorators/tests-definition.decorator';
import { Tests } from '../../../src/core/tests';

@TestsDefinition(TestType.Class, 'TestDefinition test')
class TestDefinitionTest {

}

test('must have test for class TestDefinitionTest', () => {
    const test = Tests.FindTest('TestDefinitionTest');
    
    expect(test).not.toBe(null);
    expect(test.className).toBe('TestDefinitionTest');
    expect(test.testType).toBe(TestType.Class);
    expect(test.description).toBe('TestDefinition test');
    expect(test.startup).toBe(null);
});