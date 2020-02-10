import { Test } from './interfaces/test.interface';
import { TestType } from './enums/test-type.enum';

let _tests: Test[] = [];

export class Tests {
    private static addTest(test: Test) {
        _tests.push(test);
    }

    public static all(): Test[] {
        return _tests;
    }

    public static defineTest(className: string, testType: TestType, description: string) {
        const foundTest = this.findTest(className);

        if (foundTest === undefined) {
            Tests.addTest({
                className: className,
                description: description,
                testType: testType,
                startup: null,
                units: []
            });
        } else {
            foundTest.testType = testType;
            foundTest.description = description;
        }
    }

    public static findTest(className: string): Test {
        return _tests.filter(x => x.className === className)[0];
    }

    public static setMethodToUnit(className: string, methodName: string, method: Function, args: any[]) {
        const foundTest = this.findTest(className);
        
        if (foundTest === undefined) {
            Tests.addTest({
                className: className,
                description: null,
                testType: null,
                startup: null,
                units: [{
                    methodName: methodName,
                    description: null,
                    testType: null,
                    method: method,
                    data: [args]
                }]
            });
        } else {
            const foundMethod = foundTest.units.filter(x => x.methodName === methodName)[0];

            if (foundMethod === undefined) {
                foundTest.units.push({
                    methodName: methodName,
                    description: null,
                    testType: null,
                    method: method,
                    data: [args]
                });
            } else {
                foundMethod.data.push(args);
            }
        }
    }

    public static setStartup(className: string, startup: Function) {
        Tests.addTest({
            className: className,
            description: null,
            testType: null,
            startup: startup,
            units: []
        });
    }

    public static setUnit(className: string, methodName: string, testType: TestType, description: string, method: Function) {
        const foundTest = this.findTest(className);

        if (foundTest === undefined) {
            Tests.addTest({
                className: className,
                description: null,
                testType: null,
                startup: null,
                units: [{
                    methodName: methodName,
                    description: description,
                    testType: testType,
                    method: method,
                    data: []
                }]
            });
        } else {
            const foundMethod = foundTest.units.filter(x => x.methodName === methodName)[0];

            if (foundMethod === undefined) {
                foundTest.units.push({
                    methodName: methodName,
                    description: description,
                    testType: testType,
                    method: method,
                    data: []
                });
            } else {
                foundMethod.description = description;
                foundMethod.testType = testType;
            }
        }
    }
}