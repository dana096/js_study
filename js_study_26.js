var func = x => x * x;
var func = (x, y) => { return x + y };

// no
var func = () => {foo:1};
// func() 호출은 undefined를 반환

// yes
var func = () => ( {foo:1} );

var func = ()
=> 1;
// SyntaxError: expected expression, got '=>'
