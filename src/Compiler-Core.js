define("amber_core/Compiler-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure", "amber_core/Kernel-Collections"], function($boot){
var $vm=$boot.vm,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$vm,_st=$recv,globals=$globals;
$vm.addPackage('Compiler-Core');
$vm.packages["Compiler-Core"].transport = {"type":"amd","amdNamespace":"amber_core"};

$vm.addClass('AbstractCodeGenerator', $globals.Object, ['currentClass', 'source'], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractCodeGenerator.comment="I am the abstract super class of all code generators and provide their common API.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "classNameFor:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$1;
$2=_st(aClass)._isMetaclass();
if($vm.assert($2)){
$3=_st(_st(aClass)._instanceClass())._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$1=_st($3).__comma(".klass");
} else {
$4=_st(aClass)._isNil();
if($vm.assert($4)){
$1="nil";
} else {
$1=_st(aClass)._name();
};
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classNameFor:",{aClass:aClass},$globals.AbstractCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "classNameFor: aClass\x0a\x09^ aClass isMetaclass\x0a\x09\x09ifTrue: [ aClass instanceClass name, '.klass' ]\x0a\x09\x09ifFalse: [\x0a\x09\x09aClass isNil\x0a\x09\x09\x09ifTrue: [ 'nil' ]\x0a\x09\x09\x09ifFalse: [ aClass name ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isMetaclass", ",", "name", "instanceClass", "isNil"]
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode},$globals.AbstractCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "pseudoVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._pseudoVariableNames();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVariables",{},$globals.AbstractCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVariables\x0a\x09^ Smalltalk pseudoVariableNames",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["pseudoVariableNames"]
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.AbstractCodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.AbstractCodeGenerator);

$vm.addMethod(
$vm.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AbstractCodeGenerator);



$vm.addClass('CodeGenerator', $globals.AbstractCodeGenerator, [], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CodeGenerator.comment="I am a basic code generator. I generate a valid JavaScript output, but no not perform any inlining.\x0aSee `InliningCodeGenerator` for an optimized JavaScript code generation.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var ir,stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
_st(self._semanticAnalyzer())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=1;
//>>excludeEnd("ctx");
ir=_st(self._translator())._visit_(aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["visit:"]=2;
//>>excludeEnd("ctx");
$2=self._irTranslator();
_st($2)._currentClass_(self._currentClass());
_st($2)._visit_(ir);
$3=_st($2)._contents();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,ir:ir,stream:stream},$globals.CodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| ir stream |\x0a\x09self semanticAnalyzer visit: aNode.\x0a\x09ir := self translator visit: aNode.\x0a\x09^ self irTranslator\x0a\x09\x09currentClass: self currentClass;\x0a\x09\x09visit: ir;\x0a\x09\x09contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "semanticAnalyzer", "translator", "currentClass:", "irTranslator", "currentClass", "contents"]
}),
$globals.CodeGenerator);

$vm.addMethod(
$vm.method({
selector: "irTranslator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRJSTranslator(){return $globals.IRJSTranslator||(typeof IRJSTranslator=="undefined"?nil:IRJSTranslator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($IRJSTranslator())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"irTranslator",{},$globals.CodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "irTranslator\x0a\x09^ IRJSTranslator new",
referencedClasses: ["IRJSTranslator"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CodeGenerator);

$vm.addMethod(
$vm.method({
selector: "semanticAnalyzer",
protocol: 'compiling',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return $globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($SemanticAnalyzer())._on_(self._currentClass());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"semanticAnalyzer",{},$globals.CodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "semanticAnalyzer\x0a\x09^ SemanticAnalyzer on: self currentClass",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["on:", "currentClass"]
}),
$globals.CodeGenerator);

$vm.addMethod(
$vm.method({
selector: "translator",
protocol: 'compiling',
fn: function (){
var self=this;
function $IRASTTranslator(){return $globals.IRASTTranslator||(typeof IRASTTranslator=="undefined"?nil:IRASTTranslator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=_st($IRASTTranslator())._new();
_st($2)._source_(self._source());
_st($2)._theClass_(self._currentClass());
$3=_st($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translator",{},$globals.CodeGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "translator\x0a\x09^ IRASTTranslator new\x0a\x09\x09source: self source;\x0a\x09\x09theClass: self currentClass;\x0a\x09\x09yourself",
referencedClasses: ["IRASTTranslator"],
//>>excludeEnd("ide");
messageSends: ["source:", "new", "source", "theClass:", "currentClass", "yourself"]
}),
$globals.CodeGenerator);



$vm.addClass('Compiler', $globals.Object, ['currentClass', 'source', 'unknownVariables', 'codeGeneratorClass'], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Compiler.comment="I provide the public interface for compiling Amber source code into JavaScript.\x0a\x0aThe code generator used to produce JavaScript can be plugged with `#codeGeneratorClass`.\x0aThe default code generator is an instance of `InlinedCodeGenerator`";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "codeGeneratorClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $InliningCodeGenerator(){return $globals.InliningCodeGenerator||(typeof InliningCodeGenerator=="undefined"?nil:InliningCodeGenerator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@codeGeneratorClass"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$InliningCodeGenerator();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeGeneratorClass",{},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeGeneratorClass\x0a\x09^ codeGeneratorClass ifNil: [ InliningCodeGenerator ]",
referencedClasses: ["InliningCodeGenerator"],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "codeGeneratorClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@codeGeneratorClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "codeGeneratorClass: aClass\x0a\x09codeGeneratorClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "compile:",
protocol: 'compiling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._compileNode_(self._parse_(aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compile: aString\x0a\x09^ self compileNode: (self parse: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["compileNode:", "parse:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "compile:forClass:",
protocol: 'compiling',
fn: function (aString,aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._currentClass_(aClass);
self._source_(aString);
$1=self._compile_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compile:forClass:",{aString:aString,aClass:aClass},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aClass"],
source: "compile: aString forClass: aClass\x0a\x09self currentClass: aClass.\x0a\x09self source: aString.\x0a\x09^ self compile: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentClass:", "source:", "compile:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "compileExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._currentClass_($DoIt());
$1=_st("doIt ^ [ ".__comma(aString)).__comma(" ] value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._source_($1);
$2=self._compileNode_(self._parse_(self._source()));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileExpression:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "compileExpression: aString\x0a\x09self currentClass: DoIt.\x0a\x09self source: 'doIt ^ [ ', aString, ' ] value'.\x0a\x09^ self compileNode: (self parse: self source)",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["currentClass:", "source:", ",", "compileNode:", "parse:", "source"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "compileExpression:on:",
protocol: 'compiling',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._currentClass_(_st(anObject)._class());
$1=_st("xxxDoIt ^ [ ".__comma(aString)).__comma(" ] value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._source_($1);
$2=self._compileNode_(self._parse_(self._source()));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileExpression:on:",{aString:aString,anObject:anObject},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "compileExpression: aString on: anObject\x0a\x09self currentClass: anObject class.\x0a\x09self source: 'xxxDoIt ^ [ ', aString, ' ] value'.\x0a\x09^ self compileNode: (self parse: self source)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentClass:", "class", "source:", ",", "compileNode:", "parse:", "source"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "compileNode:",
protocol: 'compiling',
fn: function (aNode){
var self=this;
var generator,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
generator=_st(self._codeGeneratorClass())._new();
$1=generator;
_st($1)._source_(self._source());
$2=_st($1)._currentClass_(self._currentClass());
result=_st(generator)._compileNode_(aNode);
self._unknownVariables_([]);
$3=result;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"compileNode:",{aNode:aNode,generator:generator,result:result},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "compileNode: aNode\x0a\x09| generator result |\x0a\x09generator := self codeGeneratorClass new.\x0a\x09generator\x0a\x09\x09source: self source;\x0a\x09\x09currentClass: self currentClass.\x0a\x09result := generator compileNode: aNode.\x0a\x09self unknownVariables: #().\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "codeGeneratorClass", "source:", "source", "currentClass:", "currentClass", "compileNode:", "unknownVariables:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "currentClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentClass\x0a\x09^ currentClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "currentClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@currentClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "currentClass: aClass\x0a\x09currentClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "eval:",
protocol: 'compiling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return eval(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09<return eval(aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "evaluateExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $DoIt(){return $globals.DoIt||(typeof DoIt=="undefined"?nil:DoIt)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._evaluateExpression_on_(aString,_st($DoIt())._new());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluateExpression: aString\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression and answer the returned object\x22\x0a\x09^ self evaluateExpression: aString on: DoIt new",
referencedClasses: ["DoIt"],
//>>excludeEnd("ide");
messageSends: ["evaluateExpression:on:", "new"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "evaluateExpression:on:",
protocol: 'compiling',
fn: function (aString,anObject){
var self=this;
var result,method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
method=self._eval_(self._compileExpression_on_(aString,anObject));
_st(method)._protocol_("**xxxDoIt");
$1=_st(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
_st($1)._addCompiledMethod_(method);
result=_st(anObject)._xxxDoIt();
_st(_st(anObject)._class())._removeCompiledMethod_(method);
$2=result;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateExpression:on:",{aString:aString,anObject:anObject,result:result,method:method},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluateExpression: aString on: anObject\x0a\x09\x22Unlike #eval: evaluate a Smalltalk expression with anObject as the receiver and answer the returned object\x22\x0a\x09| result method |\x0a\x09method := self eval: (self compileExpression: aString on: anObject).\x0a\x09method protocol: '**xxxDoIt'.\x0a\x09anObject class addCompiledMethod: method.\x0a\x09result := anObject xxxDoIt.\x0a\x09anObject class removeCompiledMethod: method.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["eval:", "compileExpression:on:", "protocol:", "addCompiledMethod:", "class", "xxxDoIt", "removeCompiledMethod:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "install:forClass:protocol:",
protocol: 'compiling',
fn: function (aString,aBehavior,anotherString){
var self=this;
function $ClassBuilder(){return $globals.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(_st($ClassBuilder())._new())._installMethod_forClass_protocol_(self._eval_(self._compile_forClass_(aString,aBehavior)),aBehavior,anotherString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"install:forClass:protocol:",{aString:aString,aBehavior:aBehavior,anotherString:anotherString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBehavior", "anotherString"],
source: "install: aString forClass: aBehavior protocol: anotherString\x0a\x09^ ClassBuilder new\x0a\x09\x09installMethod: (self eval: (self compile: aString forClass: aBehavior))\x0a\x09\x09forClass: aBehavior\x0a\x09\x09protocol: anotherString",
referencedClasses: ["ClassBuilder"],
//>>excludeEnd("ide");
messageSends: ["installMethod:forClass:protocol:", "new", "eval:", "compile:forClass:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "parse:",
protocol: 'compiling',
fn: function (aString){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st($Smalltalk())._parse_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ Smalltalk parse: aString",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "parseExpression:",
protocol: 'compiling',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=_st("doIt ^ [ ".__comma(aString)).__comma(" ] value");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self._parse_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parseExpression:",{aString:aString},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parseExpression: aString\x0a\x09^ self parse: 'doIt ^ [ ', aString, ' ] value'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parse:", ","]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "recompile:",
protocol: 'compiling',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
_st(_st(_st(aClass)._methodDictionary())._values())._do_displayingProgress_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._install_forClass_protocol_(_st(each)._source(),aClass,_st(each)._protocol());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),"Recompiling ".__comma(_st(aClass)._name()));
$1=_st(aClass)._isMetaclass();
if(!$vm.assert($1)){
self._recompile_(_st(aClass)._class());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09aClass methodDictionary values\x0a\x09\x09do: [ :each | \x0a\x09\x09\x09self \x0a\x09\x09\x09\x09install: each source \x0a\x09\x09\x09\x09forClass: aClass \x0a\x09\x09\x09\x09protocol: each protocol ]\x0a\x09\x09displayingProgress: 'Recompiling ', aClass name.\x0a\x09aClass isMetaclass ifFalse: [ self recompile: aClass class ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:displayingProgress:", "values", "methodDictionary", "install:forClass:protocol:", "source", "protocol", ",", "name", "ifFalse:", "isMetaclass", "recompile:", "class"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "recompileAll",
protocol: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st($Smalltalk())._classes())._do_displayingProgress_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._recompile_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),"Compiling all classes...");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes \x0a\x09\x09do: [ :each | self recompile: each ]\x0a\x09\x09displayingProgress: 'Compiling all classes...'",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["do:displayingProgress:", "classes", "recompile:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "source",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@source"];
if(($receiver = $2) == null || $receiver.isNil){
$1="";
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"source",{},$globals.Compiler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "source\x0a\x09^ source ifNil: [ '' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "source:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@source"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "source: aString\x0a\x09source := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "unknownVariables",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@unknownVariables"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);

$vm.addMethod(
$vm.method({
selector: "unknownVariables:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
self["@unknownVariables"]=aCollection;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "unknownVariables: aCollection\x0a\x09unknownVariables := aCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Compiler);


$vm.addMethod(
$vm.method({
selector: "recompile:",
protocol: 'compiling',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(self._new())._recompile_(aClass);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompile:",{aClass:aClass},$globals.Compiler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "recompile: aClass\x0a\x09self new recompile: aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["recompile:", "new"]
}),
$globals.Compiler.klass);

$vm.addMethod(
$vm.method({
selector: "recompileAll",
protocol: 'compiling',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
_st(_st($Smalltalk())._classes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._recompile_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"recompileAll",{},$globals.Compiler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "recompileAll\x0a\x09Smalltalk classes do: [ :each |\x0a\x09\x09self recompile: each ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["do:", "classes", "recompile:"]
}),
$globals.Compiler.klass);


$vm.addClass('DoIt', $globals.Object, [], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DoIt.comment="`DoIt` is the class used to compile and evaluate expressions. See `Compiler >> evaluateExpression:`.";
//>>excludeEnd("ide");


$vm.addClass('Evaluator', $globals.InterfacingObject, [], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Evaluator.comment="I evaluate code against a receiver, dispatching #evaluate:on: to the receiver.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "evaluate:context:",
protocol: 'evaluating',
fn: function (aString,aContext){
var self=this;
var compiler,ast;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $AISemanticAnalyzer(){return $globals.AISemanticAnalyzer||(typeof AISemanticAnalyzer=="undefined"?nil:AISemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
ast=_st(compiler)._parseExpression_(aString);
return ast;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=_st($AISemanticAnalyzer())._on_(_st(_st(aContext)._receiver())._class());
_st($2)._context_(aContext);
$3=_st($2)._visit_(ast);
$4=_st(aContext)._evaluateNode_(ast);
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:context:",{aString:aString,aContext:aContext,compiler:compiler,ast:ast},$globals.Evaluator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aContext"],
source: "evaluate: aString context: aContext\x0a\x09\x22Similar to #evaluate:for:, with the following differences:\x0a\x09- instead of compiling and running `aString`, `aString` is interpreted using an `ASTInterpreter`\x0a\x09- instead of evaluating against a receiver, evaluate in the context of `aContext`\x22\x0a\x0a\x09| compiler ast |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ ast := compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ self alert: ex messageText ].\x0a\x09\x09\x0a\x09(AISemanticAnalyzer on: aContext receiver class)\x0a\x09\x09context: aContext;\x0a\x09\x09visit: ast.\x0a\x0a\x09^ aContext evaluateNode: ast",
referencedClasses: ["Compiler", "Error", "AISemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "context:", "on:", "class", "receiver", "visit:", "evaluateNode:"]
}),
$globals.Evaluator);

$vm.addMethod(
$vm.method({
selector: "evaluate:for:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(anObject)._evaluate_on_(aString,self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},$globals.Evaluator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ anObject evaluate: aString on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:on:"]
}),
$globals.Evaluator);

$vm.addMethod(
$vm.method({
selector: "evaluate:receiver:",
protocol: 'evaluating',
fn: function (aString,anObject){
var self=this;
var compiler;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
compiler=_st($Compiler())._new();
_st((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return _st(compiler)._parseExpression_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._alert_(_st(ex)._messageText());
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=_st(compiler)._evaluateExpression_on_(aString,anObject);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:receiver:",{aString:aString,anObject:anObject,compiler:compiler},$globals.Evaluator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString receiver: anObject\x0a\x09| compiler |\x0a\x09\x0a\x09compiler := Compiler new.\x0a\x09[ compiler parseExpression: aString ] \x0a\x09\x09on: Error \x0a\x09\x09do: [ :ex | ^ self alert: ex messageText ].\x0a\x0a\x09^ compiler evaluateExpression: aString on: anObject",
referencedClasses: ["Compiler", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "evaluateExpression:on:"]
}),
$globals.Evaluator);


$vm.addMethod(
$vm.method({
selector: "evaluate:for:",
protocol: 'instance creation',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(self._new())._evaluate_for_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:for:",{aString:aString,anObject:anObject},$globals.Evaluator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "evaluate: aString for: anObject\x0a\x09^ self new evaluate: aString for: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:for:", "new"]
}),
$globals.Evaluator.klass);


$vm.addClass('NodeVisitor', $globals.Object, [], 'Compiler-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.NodeVisitor.comment="I am the abstract super class of all AST node visitors.";
//>>excludeEnd("ide");
$vm.addMethod(
$vm.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aNode)._accept_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09^ aNode accept: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["accept:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitAll:",
protocol: 'visiting',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=_st(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._visit_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAll:",{aCollection:aCollection},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "visitAll: aCollection\x0a\x09^ aCollection collect: [ :each | self visit: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "visit:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitBlockSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitSequenceNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09^ self visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitSequenceNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitAll_(_st(aNode)._nodes());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitNode: aNode\x0a\x09^ self visitAll: aNode nodes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAll:", "nodes"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);

$vm.addMethod(
$vm.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._visitNode_(aNode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},$globals.NodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09^ self visitNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitNode:"]
}),
$globals.NodeVisitor);


$vm.addMethod(
$vm.method({
selector: "asVariableName",
protocol: '*Compiler-Core',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $vm.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=_st(_st($Smalltalk())._reservedWords())._includes_(self);
if($vm.assert($2)){
$1=self.__comma("_");
} else {
$1=self;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asVariableName",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asVariableName\x0a\x09^ (Smalltalk reservedWords includes: self)\x0a\x09\x09ifTrue: [ self, '_' ]\x0a\x09\x09ifFalse: [ self ]",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "includes:", "reservedWords", ","]
}),
$globals.String);

});
