const ParseTreeWalker = require("antlr4").tree.ParseTreeWalker;
const CommonTokenStream = require("antlr4").CommonTokenStream;
const InputStream = require("antlr4").InputStream;
const HelloLexer = require("./HelloLexer").HelloLexer;
const HelloParser = require("./HelloParser").HelloParser;
const HelloListener = require("./HelloListener").HelloListener;

const lexer = new HelloLexer(new InputStream("hello dmitry"));
const tokens = new CommonTokenStream(lexer);
const parser = new HelloParser(tokens);
const extractor = new HelloListener(parser);

const tree = parser.r(); // parse a compilationUnit
ParseTreeWalker.DEFAULT.walk(extractor, tree); // initiate walk of tree with listener in use of default walker