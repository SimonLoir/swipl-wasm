import { Atom } from './Atom';
import { Integer } from './Integer';
import { ListPair } from './ListPair';
import { Nil } from './Nil';
import { Term } from './Term';

export type PrologTerm = Atom | Integer | Nil | Term | ListPair;
