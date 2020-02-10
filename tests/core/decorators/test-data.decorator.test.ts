import { TestsDefinition } from '../../../src/core/decorators/tests-definition.decorator';
import { TestType } from '../../../src/core/enums/test-type.enum';
import { TestsStartup } from '../../../src/core/decorators/tests-startup.decorator';
import { TestUnit } from '../../../src/core/decorators/test-unit.decorator';
import { Core } from '../../../src/core/core';
import { TestData } from '../../../src/core/decorators/test-data.decorator';

@TestsDefinition(TestType.Class, "TestDataUnits test")
class TestDataUnitsTest {

    @TestsStartup()
    public startup() {
        console.log('call startup');
    }

    @TestUnit(TestType.Method, "TestOne unit test")
    @TestData(new Date(2020,2,7), "Param2.1")
    @TestData(new Date(2020,2,8), "Param2.2")
    public TestOne(date: Date, text: string){
        console.log(`call TestOne method with args ${date},${text}`);
    }

    @TestUnit(TestType.Method, "TestTwo unit test")
    public TestTwo(){
        console.log('call TestTwo method');
    }
}

// test('must have test for class TestDataUnits', () => {
//     const test = Core.current();
    
//     expect(test).not.toBe(null);
//     expect(test.className).toBe('TestDataUnitsTest');
//     expect(test.testType).toBe(TestType.Class);
//     expect(test.description).toBe('TestDataUnits test');
//     expect(test.startup).toBe(new TestDataUnitsTest().startup);
//     expect(test.units).not.toEqual([]);

//     expect(test.units[0].testType).toBe(TestType.Method);
//     expect(test.units[0].description).toBe('TestOne unit test');
//     expect(test.units[0].method).toBe(new TestDataUnitsTest().TestOne);
//     expect(test.units[0].data[0]).toEqual([new Date(2020,2,8), "Param2.2"]);
//     expect(test.units[0].data[1]).toEqual([new Date(2020,2,7), "Param2.1"]);

//     expect(test.units[1].testType).toBe(TestType.Method);
//     expect(test.units[1].description).toBe('TestTwo unit test');
//     expect(test.units[1].method).toBe(new TestDataUnitsTest().TestTwo);
// });