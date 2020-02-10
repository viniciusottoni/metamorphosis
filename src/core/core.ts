import { Test } from './interfaces/test.interface';
import { TestType } from './enums/test-type.enum';

let _current: Test = undefined;

export class Core {
    private static addTest(test: Test) {
        _current = test;
    }

    public static defineTest(className: string, testType: TestType, description: string) {
        if (_current === undefined) {
            Core.addTest({
                className: className,
                description: description,
                testType: testType,
                startup: null,
                units: []
            });
        } else {
            _current.testType = testType;
            _current.description = description;
        }
    }

    public static run() {
        console.log(`${_current.testType}: ${_current.description} (${_current.className})`);
        
        if (_current.startup !== null) {
            console.log('startup');
            _current.startup();
        }

        _current.units.forEach((unit) => {
            console.log(`${unit.testType}: ${unit.description} (${unit.methodName})`);
            
            if (unit.data.length > 0) {
                for (let i = (unit.data.length - 1); i >= 0; i--) {
                    console.log(`args: ${unit.data[i]}`);
                    unit.method.apply(null, unit.data[i]);
                }
            } else {
                unit.method();
            }
        });
    }

    public static setMethodToUnit(className: string, methodName: string, method: Function, args: any[]) {
        if (_current === undefined) {
            Core.addTest({
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
            const foundMethod = _current.units.filter(x => x.methodName === methodName)[0];

            if (foundMethod === undefined) {
                _current.units.push({
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
        Core.addTest({
            className: className,
            description: null,
            testType: null,
            startup: startup,
            units: []
        });
    }

    public static setUnit(className: string, methodName: string, testType: TestType, description: string, method: Function) {
        if (_current === undefined) {
            Core.addTest({
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
            const foundMethod = _current.units.filter(x => x.methodName === methodName)[0];

            if (foundMethod === undefined) {
                _current.units.push({
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

    public static current(): Test {
        return _current;
    }
}