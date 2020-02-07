import { TestType } from '../enums/test-type.enum';

export interface Test {
    className: string;
    testType: TestType;
    description: string;

    startup: Function;
}