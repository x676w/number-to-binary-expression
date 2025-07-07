export type BinaryOperator = "+" | "-";

export type BinaryExpression = {
  left: number;
  right: number;
  operator: BinaryOperator;
};