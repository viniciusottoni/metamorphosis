import { TestsDefinition } from '../../../src/core/decorators/tests-definition.decorator';
import { TestType } from '../../../src/core/enums/test-type.enum';
import { TestsStartup } from '../../../src/core/decorators/tests-startup.decorator';
import { TestUnit } from '../../../src/core/decorators/test-unit.decorator';
import { Core } from '../../../src/core/core';

@TestsDefinition(TestType.Class, "TestUnits test")
class TestUnitsTest {

    @TestsStartup()
    public startup() {
        console.log('call startup');
    }

    @TestUnit(TestType.Method, "TestOne unit test")
    public TestOne(){
        console.log('call TestOne method');
    }

    @TestUnit(TestType.Method, "TestTwo unit test")
    public TestTwo(){
        console.log('call TestTwo method');
    }
}

test('must have test for class TestUnitsTest', () => {
    const test = Core.current();
    
    expect(test).not.toBe(null);
    expect(test.className).toBe('TestUnitsTest');
    expect(test.testType).toBe(TestType.Class);
    expect(test.description).toBe('TestUnits test');
    expect(test.startup).toBe(new TestUnitsTest().startup);
    expect(test.units).not.toEqual([]);

    expect(test.units[0].testType).toBe(TestType.Method);
    expect(test.units[0].description).toBe('TestOne unit test');
    expect(test.units[0].method).toBe(new TestUnitsTest().TestOne);

    expect(test.units[1].testType).toBe(TestType.Method);
    expect(test.units[1].description).toBe('TestTwo unit test');
    expect(test.units[1].method).toBe(new TestUnitsTest().TestTwo);
});