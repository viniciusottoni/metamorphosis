import { TestType } from '../../../src/core/enums/test-type.enum';
import { TestsDefinition } from '../../../src/core/decorators/tests-definition.decorator';
import { Core } from '../../../src/core/core';

@TestsDefinition(TestType.Class, 'TestDefinition test')
class TestDefinitionTest {

}

test('must have test for class TestDefinitionTest', () => {
    const test = Core.current();
    
    expect(test).not.toBe(null);
    expect(test.className).toBe('TestDefinitionTest');
    expect(test.testType).toBe(TestType.Class);
    expect(test.description).toBe('TestDefinition test');
    expect(test.startup).toBe(null);
    expect(test.units).toEqual([]);
});