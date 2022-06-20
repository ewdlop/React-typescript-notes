import "typed/jasmine";

describe('Testing', () => {
    type f = (x: any) => any;
    type Number = (f: f) => (x: any) => any;

    const SUCC: Number = (n: Number) => (f: f) => (x: any) => f(n(f)(x))
    const Zero: Number = f => x => x;
    const One: Number = f => x => f(x);
    const Two: Number = f => x => f(f(x));
    const Three: Number = f => x => f(f(f(x)));

    type Bool = (x: any) => (y: any) => any;
    const T: Bool = a => b => a;
    const F: Bool = a => b => b;

    type Bool_Operator = (x: Bool) => (y: Bool) => Bool;

    type Monad<A> = {
        map: <B>(f: (a: A) => B) => Monad<B>
    }

    const And: Bool_Operator = p => q => p(q)(p)
    const Or: Bool_Operator = p => q => p(p)(q)
    const Not: Bool_Operator = p => F(T)
    const IfElse: Bool_Operator = p => q => m => p(q)(m)

    const Iszero: Bool_Operator = (n: Number) => n(x => F)(T)

    it("Not T is F", () => {
        expect(Not(T)).toBe(F);
    });
});