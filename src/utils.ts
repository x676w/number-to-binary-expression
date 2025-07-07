import { BinaryOperator } from "./types.js";

export function getRandomInteger(min: number, max: number): number {
  return min + Math.round(Math.random() * (max - min));
};

export function isInteger(n: number): boolean {
  return typeof n === 'number'
    && Number.isInteger(n)
    && !Number.isNaN(n);
};

export function calculate(arg$1: number, arg$2: number, operator: BinaryOperator): number {
  return eval(`${arg$1} ${operator} ${arg$2}`);
};