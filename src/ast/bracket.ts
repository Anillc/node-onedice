import { DiceNode } from '.'
import { Config } from '..'

export interface BracketEvaluation {
  value: number
}

export class BracketNode implements DiceNode<BracketEvaluation> {
  evaluation: BracketEvaluation
  constructor(public inner: DiceNode) {}

  eval(config: Config): number {
    const value = this.inner.eval(config)
    this.evaluation = { value }
    return value
  }
}