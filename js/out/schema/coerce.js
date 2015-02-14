// Compiled by ClojureScript 0.0-2850 {}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('cljs.reader');
/**
* A Schema for Schemas
*/
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$75,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$77,(function (p1__12200__12201__auto__){
var G__37320 = p1__12200__12201__auto__;
if(G__37320){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__37320.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__37320.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__37320);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__37320);
}
})], null));
/**
* A function from schema to coercion function, or nil if no special coercion is needed.
* The returned function is applied to the corresponding data before validation (or walking/
* coercion of its sub-schemas, if applicable)
*/
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___37339 = schema.utils.use_fn_validation;
var output_schema37321_37340 = schema.core.Any;
var input_schema37322_37341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one(schema.coerce.CoercionMatcher,new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null))], null);
var input_checker37323_37342 = schema.core.checker(input_schema37322_37341);
var output_checker37324_37343 = schema.core.checker(output_schema37321_37340);
/**
* Inputs: [schema coercion-matcher :- CoercionMatcher]
* 
* Produce a function that simultaneously coerces and validates a datum.
*/
schema.coerce.coercer = ((function (ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343){
return (function coercer(G__37325,G__37326){
var validate__12170__auto__ = ufv___37339.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___37344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37325,G__37326], null);
var temp__4126__auto___37345 = (function (){var G__37333 = args__12171__auto___37344;
return (input_checker37323_37342.cljs$core$IFn$_invoke$arity$1 ? input_checker37323_37342.cljs$core$IFn$_invoke$arity$1(G__37333) : input_checker37323_37342.call(null,G__37333));
})();
if(cljs.core.truth_(temp__4126__auto___37345)){
var error__12172__auto___37346 = temp__4126__auto___37345;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37346], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37346,cljs.core.constant$keyword$64,args__12171__auto___37344,cljs.core.constant$keyword$65,input_schema37322_37341,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var schema__$1 = G__37325;
var coercion_matcher = G__37326;
while(true){
return schema.core.start_walker(schema.utils.memoize_id(((function (validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343){
return (function (s){
var walker = schema.core.walker(s);
var temp__4124__auto__ = (function (){var G__37334 = s;
return (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(G__37334) : coercion_matcher.call(null,G__37334));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var coercer__$1 = temp__4124__auto__;
return ((function (coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343){
return (function (x){
try{var v = (function (){var G__37336 = x;
return (coercer__$1.cljs$core$IFn$_invoke$arity$1 ? coercer__$1.cljs$core$IFn$_invoke$arity$1(G__37336) : coercer__$1.call(null,G__37336));
})();
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var G__37337 = v;
return (walker.cljs$core$IFn$_invoke$arity$1 ? walker.cljs$core$IFn$_invoke$arity$1(G__37337) : walker.call(null,G__37337));
}
}catch (e37335){if((e37335 instanceof Object)){
var t = e37335;
return schema.utils.error(schema.utils.__GT_ValidationError(s,x,(new cljs.core.Delay(((function (t,coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343){
return (function (){
return t;
});})(t,coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343))
,null)),null));
} else {
throw e37335;

}
}});
;})(coercer__$1,temp__4124__auto__,walker,validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343))
} else {
return walker;
}
});})(validate__12170__auto__,ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343))
),schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___37347 = (function (){var G__37338 = o__12173__auto__;
return (output_checker37324_37343.cljs$core$IFn$_invoke$arity$1 ? output_checker37324_37343.cljs$core$IFn$_invoke$arity$1(G__37338) : output_checker37324_37343.call(null,G__37338));
})();
if(cljs.core.truth_(temp__4126__auto___37347)){
var error__12172__auto___37348 = temp__4126__auto___37347;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37348,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema37321_37340,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___37339,output_schema37321_37340,input_schema37322_37341,input_checker37323_37342,output_checker37324_37343))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.make_fn_schema(output_schema37321_37340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37322_37341], null)));
var ufv___37361 = schema.utils.use_fn_validation;
var output_schema37350_37362 = schema.coerce.CoercionMatcher;
var input_schema37351_37363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null))], null);
var input_checker37352_37364 = schema.core.checker(input_schema37351_37363);
var output_checker37353_37365 = schema.core.checker(output_schema37350_37362);
/**
* Inputs: [matchers :- [CoercionMatcher]]
* Returns: CoercionMatcher
* 
* A matcher that takes the first match from matchers.
*/
schema.coerce.first_matcher = ((function (ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365){
return (function first_matcher(G__37354){
var validate__12170__auto__ = ufv___37361.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___37366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37354], null);
var temp__4126__auto___37367 = (function (){var G__37358 = args__12171__auto___37366;
return (input_checker37352_37364.cljs$core$IFn$_invoke$arity$1 ? input_checker37352_37364.cljs$core$IFn$_invoke$arity$1(G__37358) : input_checker37352_37364.call(null,G__37358));
})();
if(cljs.core.truth_(temp__4126__auto___37367)){
var error__12172__auto___37368 = temp__4126__auto___37367;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37368], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37368,cljs.core.constant$keyword$64,args__12171__auto___37366,cljs.core.constant$keyword$65,input_schema37351_37363,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var matchers = G__37354;
while(true){
return ((function (validate__12170__auto__,ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12170__auto__,ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365){
return (function (p1__37349_SHARP_){
var G__37359 = schema__$1;
return (p1__37349_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37349_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37359) : p1__37349_SHARP_.call(null,G__37359));
});})(validate__12170__auto__,ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365))
,matchers));
});
;})(validate__12170__auto__,ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365))
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___37369 = (function (){var G__37360 = o__12173__auto__;
return (output_checker37353_37365.cljs$core$IFn$_invoke$arity$1 ? output_checker37353_37365.cljs$core$IFn$_invoke$arity$1(G__37360) : output_checker37353_37365.call(null,G__37360));
})();
if(cljs.core.truth_(temp__4126__auto___37369)){
var error__12172__auto___37370 = temp__4126__auto___37369;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___37370], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___37370,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema37350_37362,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___37361,output_schema37350_37362,input_schema37351_37363,input_checker37352_37364,output_checker37353_37365))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.make_fn_schema(output_schema37350_37362,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37351_37363], null)));
schema.coerce.string__GT_keyword = (function string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
});
/**
* returns true for strings that are equal, ignoring case, to the string 'true'
* (following java.lang.Boolean/parseBoolean semantics)
*/
schema.coerce.string__GT_boolean = (function string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function keyword_enum_matcher(schema__$1){
if(((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,schema__$1.vs))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
* Take a single-arg function f, and return a single-arg function that acts as identity
* if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
* guarded for exceptions, and failing to coerce will generally produce a more useful error
* in this case.
*/
schema.coerce.safe = (function safe(f){
return (function (x){
try{var G__37374 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37374) : f.call(null,G__37374));
}catch (e37373){if((e37373 instanceof Object)){
var e = e37373;
return x;
} else {
throw e37373;

}
}});
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean], true, false)], 0));
/**
* A matcher that coerces keywords and keyword enums from strings, and longs and doubles
* from numbers on the JVM (without losing precision)
*/
schema.coerce.json_coercion_matcher = (function json_coercion_matcher(schema__$1){
var or__3815__auto__ = (function (){var G__37378 = schema__$1;
return (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__37378) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,G__37378));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});
/**
* Reads one object from a string. Returns nil when string is nil or empty
*/
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.coerce._PLUS_json_coercions_PLUS_,new cljs.core.PersistentArrayMap.fromArray([schema.core.Num,schema.coerce.safe(schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe(schema.coerce.edn_read_string)], true, false)], 0));
/**
* A matcher that coerces keywords, keyword enums, s/Num and s/Int,
* and long and doubles (JVM only) from strings.
*/
schema.coerce.string_coercion_matcher = (function string_coercion_matcher(schema__$1){
var or__3815__auto__ = (function (){var G__37382 = schema__$1;
return (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(G__37382) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,G__37382));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return schema.coerce.keyword_enum_matcher(schema__$1);
}
});