import Calc, { CalcInput, InputType, OperatorType } from "./calc";

test('derive state', () => {
  const inputs: Array<CalcInput> = [
    {type: InputType.Numerical, value: 1},
    {type: InputType.Numerical, value: 2},
    {type: InputType.Operation, operator: OperatorType.Add},
    {type: InputType.Numerical, value: 3},
    {type: InputType.Operation, operator: OperatorType.Equals},
  ]
  const state = Calc.getState(inputs);
  expect(state.displayValue).toEqual(15)
});