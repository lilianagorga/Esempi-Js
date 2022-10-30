var assert = require("assert");
// importami il file assert nel framework mocha con la sua funzione equal. var assert è per naming.
// assert.equal = affermo che il primo argomento sia uguale al secondo Es normalfunction = 2;
// cioè il primo argomento è quello che voglio testare ed il secondo è ciò che voglio aspettarmi

const foo = {
    a: 2,
    normalFunction: function () {
        return this.a
    },
    arrowFunction: ()=>this.a,
    executor: (fn) => fn(),
    arrowFunctionDefinedInArrowContext: function () {
        return this.executor(() => this.a);
    }
};

describe("FooTests", function () {
    it("must return 2", function () {
        // var result = foo.normalFunction();
        // console.log("result inside test", result);
        assert.equal(foo.normalFunction(), 2);
    });
    it("must return 2", function () {
        assert.equal(foo.arrowFunctionDefinedInArrowContext(), 2)
    });
    // it("must return 2", function () {
    //     assert.equal(foo.arrowFunction(), 2)
    // }); il test fallisce perchè il this non è definito in arrow function perchè il this si riferisce ad un'istanza
    // in che istanza mi trovo quando sto usando il this ? con la function dipende dove sono eseguito 

});
