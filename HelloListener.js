// Generated from Hello.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HelloParser.
function HelloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HelloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HelloListener.prototype.constructor = HelloListener;

// Enter a parse tree produced by HelloParser#r.
HelloListener.prototype.enterR = function(ctx) {
	console.log("entering r");
};

// Exit a parse tree produced by HelloParser#r.
HelloListener.prototype.exitR = function(ctx) {
};



exports.HelloListener = HelloListener;