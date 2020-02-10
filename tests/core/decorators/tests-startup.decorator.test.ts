import { TestType } from '../../../src/core/enums/test-type.enum';
import { TestsDefinition } from '../../../src/core/decorators/tests-definition.decorator';
import { TestsStartup } from '../../../src/core/decorators/tests-startup.decorator';
import { Core } from '../../../src/core/core';

@TestsDefinition(TestType.Class, "TestStartup test")
class TestsStartupTest {

    @TestsStartup()
    public startup() {
        console.log('call startup');
    }
}

test('must have test for class TestsStartupTest', () => {
    const test = Core.current();
    
    expect(test).not.toBe(null);
    expect(test.className).toBe('TestsStartupTest');
    expect(test.testType).toBe(TestType.Class);
    expect(test.description).toBe('TestStartup test');
    expect(test.startup).toBe(new TestsStartupTest().startup);
    expect(test.units).toEqual([]);
});