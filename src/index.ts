import { BinaryExpression, BinaryOperator } from "./types";
import { getRandomInteger } from "./utils";

const binaryOperators: BinaryOperator[] = ["+", "-"];

export default function numericToBinaryExpression(target: number, binaryOperator?: BinaryOperator): BinaryExpression {
  let left: number;
  let right: number;
  let operator: BinaryOperator;

  if(binaryOperator) {
    operator = binaryOperator;
  } else {
    const randomIdx = getRandomInteger(0, binaryOperators.length - 1);

    operator = binaryOperators[randomIdx];
  };

  switch(operator) {
    case "+":
      left = getRandomInteger(-target, target);
      right = target - left;
      break;

    case "-":
      left = (target + getRandomInteger(0, target) - getRandomInteger(0, target));
      right = left - target;
      break;
  };

  return { left, right, operator };
};