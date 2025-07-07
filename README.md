# Numeric to BinaryExpression

Generates random addition/subtraction expressions that evaluate to a target number.

# Features
- Generates valid math expressions
- Supports `+` and `-` operators
- TypeScript ready

```sh
npm install numeric-to-binary-expression
```

# Usage
```ts
import generate from 'numeric-to-binary-expression';

// Random operator
const {left, right, operator} = generate(100); 
// Example: {left: 42, right: 58, operator: '+'}

// Specific operator 
const expr = generate(100, '-');
// Example: {left: 150, right: 50, operator: '-'}
```
Returns `{left, right, operator}` object