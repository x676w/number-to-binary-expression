import numericToBinaryExpression from "../src/index";
import { calculate, getRandomInteger } from "../src/utils";

describe('Numeric To Binary Expression Tests', () => {
  const target: number = getRandomInteger(0, 0xFFFFFFFF);

  test('Math ADD', () => {
    const { left, right, operator } = numericToBinaryExpression(target, "+");
    const result = calculate(left, right, operator);
    expect(result).toBe(target);
  });

  test('Math SUB', () => {
    const { left, right, operator } = numericToBinaryExpression(target, "-");
    const result = calculate(left, right, operator);
    expect(result).toBe(target);
  });
});