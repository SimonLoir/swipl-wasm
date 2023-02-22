import { PrologTerm } from './PrologTerm';

export class Term {
    constructor(
        public name: string,
        public arity: number,
        public args: PrologTerm[]
    ) {}
}
