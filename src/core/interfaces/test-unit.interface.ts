import { TestType } from '../enums/test-type.enum';

export interface TestUnit {
    methodName: string;
    testType: TestType;
    description: string;
    method: Function;
    data: any[];
}