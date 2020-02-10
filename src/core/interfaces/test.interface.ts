import { TestType } from '../enums/test-type.enum';
import { TestUnit } from './test-unit.interface';

export interface Test {
    className: string;
    testType: TestType;
    description: string;

    startup: Function;
    units: TestUnit[];
}