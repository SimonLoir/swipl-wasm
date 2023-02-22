export default class Swipl {
    private static instance: Promise<Swipl>;
    private constructor() {}
    private static async getInstance(): Promise<Swipl> {
        if (this.instance) return this.instance;
        this.instance = new Promise(
            async (resolve: (a: Swipl) => void, reject) => {}
        );
        return this.instance;
    }
}

export * from './terms/Atom';
export * from './terms/Integer';
export * from './terms/Nil';
export * from './terms/Term';
export * from './terms/ListPair';
export * from './terms/PrologTerm';
