import { Env, Flow, DiceNode } from '.'

export class SimpleNode implements DiceNode {
  constructor(
    public operator: string,
    public left: DiceNode,
    public right: DiceNode,
  ) {}

  eval(env: Env, flow: Flow[]): number {
    const left = this.left.eval(env, flow)
    const right = this.right.eval(env, flow)
    switch (this.operator) {
      case '+':
        return left + right
      case '-':
        return left - right
      case '*':
      case 'x':
        return left * right
      case '/':
        return left / right
      case '^':
        return Math.pow(left, right)
      default:
        throw new Error('unknown operator')
    }
  }
}