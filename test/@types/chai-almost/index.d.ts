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
