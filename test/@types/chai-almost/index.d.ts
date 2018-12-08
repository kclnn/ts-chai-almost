// Type definitions for chai-almost 1.0.1
// Project: https://github.com/nmuldavin/chai-almost#readme
// Definitions by: Lennard Schulz <https://github.com/kclnn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ChaiAlmost {
    interface DeepAlmost {
        (value: any, toleranceOverride?: number): Chai.Assertion;
        equal: Chai.Equal;
        equals: Chai.Equal;
        eq: Chai.Equal;
    }
    interface Almost extends DeepAlmost {
        eql: Chai.Equal;
        eqls: Chai.Equal;
    }
}

declare namespace Chai {
    interface Assertion {
        almost: ChaiAlmost.Almost;
    }
    interface Deep {
        almost: ChaiAlmost.DeepAlmost;
    }
}

declare function chaiAlmost(tolerance?: number): ((chai: any, utils: any) => void);

declare module "chai-almost" {
    export = chaiAlmost;
}
