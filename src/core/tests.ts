import { Test } from './interfaces/test.interface';
import { TestType } from './enums/test-type.enum';

let _tests: Test[] = [];

export class Tests {
    private static AddTest(test: Test) {
        _tests.push(test);
    }

    public static All(): Test[] {
        return _tests;
    }

    public static DefineTest(className: string, testType: TestType, description: string) {
        const foundTest = _tests.filter(x => x.className === className);

        if (foundTest.length === 0) {
            Tests.AddTest({
                className: className,
                description: description,
                testType: testType,
                startup: null
            });
        } else {
            foundTest[0].testType = testType;
            foundTest[0].description = description;
        }
    }

    public static FindTest(className: string): Test {
        return _tests.filter(x => x.className === className)[0];
    }

    public static SetStartup(className: string, startup: Function) {
        Tests.AddTest({
            className: className,
            description: null,
            testType: null,
            startup: startup
        });
    }
}