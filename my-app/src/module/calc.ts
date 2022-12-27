export enum InputType {
    Numerical,
    Operation
}

export enum OperatorType {
    Add,
    Substract,
    Equals
}

export type CalcInput = 
  |{ type: InputType.Numerical; value: number }
  |{ type: InputType.Operation; operator: OperatorType };

export type CalcState = {
  displayValue: number;
};

export type Operation = {
  operator: OperatorType;
  value: number
}

const getOperations = (inputs: Array<CalcInput>): Array<Operation> =>
  inputs.reduce((prev, input)) => , []

const getState = (inputs: Array<CalcInput>): CalcState => {

  return {displayValue: 0 };
};

const Calc = {
    getState,
};

export default Calc;