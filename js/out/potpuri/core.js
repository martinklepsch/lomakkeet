// Compiled by ClojureScript 0.0-2850 {}
goog.provide('potpuri.core');
goog.require('cljs.core');
/**
* Returns vector of tuples containing path vector to the value and the value.
*/
potpuri.core.path_vals = (function path_vals(m){
var pvals = (function pvals(l,p,m__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l__$1,p__37214){
var vec__37215 = p__37214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37215,(1),null);
if(cljs.core.map_QMARK_(v)){
return pvals(l__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k),v);
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k),v], null),l__$1);
}
}),l,m__$1);
});
return pvals(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
/**
* Re-created a map from it's path-vals extracted with (path-vals).
*/
potpuri.core.assoc_in_path_vals = (function assoc_in_path_vals(c){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.assoc_in),cljs.core.PersistentArrayMap.EMPTY,c);
});
/**
* Dissociates an entry from a nested associative structure returning a new
* nested structure. keys is a sequence of keys. Any empty maps that result
* will not be present in the new structure.
*/
potpuri.core.dissoc_in = (function dissoc_in(m,p__37216){
var vec__37220 = p__37216;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(0),null);
var ks = cljs.core.nthnext(vec__37220,(1));
var keys = vec__37220;
if(ks){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var nextmap = temp__4124__auto__;
var newmap = dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
* Recursively merges maps.
* 
* If the first parameter is a keyword it tells the strategy to
* use when merging non-map collections. Options are
* - :replace, the default, the last value is used
* - :into, if the value in every map is a collection they are concatenated
* using into. Thus the type of (first) value is maintained.
* @param {...*} var_args
*/
potpuri.core.deep_merge = (function() { 
var deep_merge__delegate = function (values){
var vec__37222 = (((cljs.core.first(values) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(values),cljs.core.first(values)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,cljs.core.constant$keyword$323], null));
var values__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(0),null);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(1),null);
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,values__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(deep_merge,strategy),values__$1);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strategy,cljs.core.constant$keyword$324)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,values__$1))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,values__$1);
} else {
return cljs.core.last(values__$1);

}
}
};
var deep_merge = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__37223__i = 0, G__37223__a = new Array(arguments.length -  0);
while (G__37223__i < G__37223__a.length) {G__37223__a[G__37223__i] = arguments[G__37223__i + 0]; ++G__37223__i;}
  values = new cljs.core.IndexedSeq(G__37223__a,0);
} 
return deep_merge__delegate.call(this,values);};
deep_merge.cljs$lang$maxFixedArity = 0;
deep_merge.cljs$lang$applyTo = (function (arglist__37224){
var values = cljs.core.seq(arglist__37224);
return deep_merge__delegate(values);
});
deep_merge.cljs$core$IFn$_invoke$arity$variadic = deep_merge__delegate;
return deep_merge;
})()
;
/**
* Wrap non-collection values into given collection.
* Collections are only put into the collection (non-wrapped).
* 
* Examples:
* (wrap-into [] :a) => [:a]
* (wrap-into [] [:a]) => [:a]
* (wrap-into #{} [:a]) => #{:a}
*/
potpuri.core.wrap_into = (function wrap_into(coll,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(coll,((cljs.core.coll_QMARK_(v))?v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)));
});
/**
* Assoc key-values pairs with non-nil values into map.
* @param {...*} var_args
*/
potpuri.core.assoc_if = (function() {
var assoc_if = null;
var assoc_if__3 = (function (m,key,val){
if(!((val == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,val);
} else {
return m;
}
});
var assoc_if__4 = (function() { 
var G__37228__delegate = function (m,key,val,kvs){
while(true){
var ret = assoc_if.cljs$core$IFn$_invoke$arity$3(m,key,val);
if(cljs.core.truth_(kvs)){
if(cljs.core.next(kvs)){
var G__37229 = ret;
var G__37230 = cljs.core.first(kvs);
var G__37231 = cljs.core.second(kvs);
var G__37232 = cljs.core.nnext(kvs);
m = G__37229;
key = G__37230;
val = G__37231;
kvs = G__37232;
continue;
} else {
throw [cljs.core.str("assoc expects even number of arguments after map/vector, found odd number")].join('');
}
} else {
return ret;
}
break;
}
};
var G__37228 = function (m,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__37233__i = 0, G__37233__a = new Array(arguments.length -  3);
while (G__37233__i < G__37233__a.length) {G__37233__a[G__37233__i] = arguments[G__37233__i + 3]; ++G__37233__i;}
  kvs = new cljs.core.IndexedSeq(G__37233__a,0);
} 
return G__37228__delegate.call(this,m,key,val,kvs);};
G__37228.cljs$lang$maxFixedArity = 3;
G__37228.cljs$lang$applyTo = (function (arglist__37234){
var m = cljs.core.first(arglist__37234);
arglist__37234 = cljs.core.next(arglist__37234);
var key = cljs.core.first(arglist__37234);
arglist__37234 = cljs.core.next(arglist__37234);
var val = cljs.core.first(arglist__37234);
var kvs = cljs.core.rest(arglist__37234);
return G__37228__delegate(m,key,val,kvs);
});
G__37228.cljs$core$IFn$_invoke$arity$variadic = G__37228__delegate;
return G__37228;
})()
;
assoc_if = function(m,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_if__3.call(this,m,key,val);
default:
var G__37235 = null;
if (arguments.length > 3) {
var G__37236__i = 0, G__37236__a = new Array(arguments.length -  3);
while (G__37236__i < G__37236__a.length) {G__37236__a[G__37236__i] = arguments[G__37236__i + 3]; ++G__37236__i;}
G__37235 = new cljs.core.IndexedSeq(G__37236__a,0);
}
return assoc_if__4.cljs$core$IFn$_invoke$arity$variadic(m,key,val, G__37235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_if.cljs$lang$maxFixedArity = 3;
assoc_if.cljs$lang$applyTo = assoc_if__4.cljs$lang$applyTo;
assoc_if.cljs$core$IFn$_invoke$arity$3 = assoc_if__3;
assoc_if.cljs$core$IFn$_invoke$arity$variadic = assoc_if__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_if;
})()
;
potpuri.core.create_predicate = (function create_predicate(where){
if(cljs.core.fn_QMARK_(where)){
return where;
} else {
if(cljs.core.map_QMARK_(where)){
return (function (v){
return cljs.core.every_QMARK_((function (p__37239){
var vec__37240 = p__37239;
var where_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(0),null);
var where_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,where_k),where_v);
}),where);
});
} else {
if(cljs.core.ifn_QMARK_(where)){
return where;
} else {
return (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,where);
});

}
}
}
});
/**
* Find index of vector which matches the where parameter.
* 
* If where parameter is:
* - a fn, it's used as predicate as is
* - a map, a predicate is created which checks if value in collection has
* same values for each key in where map
* - Something which implements IFn, e.g. keywords and sets, is used as is
* - any value, a predicate is created which checks if value is identitical
* 
* Usable with ->
*/
potpuri.core.find_index = (function find_index(coll,where){
var pred = potpuri.core.create_predicate(where);
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (pred){
return (function (p1__37242_SHARP_,p2__37241_SHARP_){
if(cljs.core.truth_((function (){var G__37244 = p2__37241_SHARP_;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__37244) : pred.call(null,G__37244));
})())){
return p1__37242_SHARP_;
} else {
return null;
}
});})(pred))
,coll));
});
/**
* Find first value from collection which mathes the where parameter.
* 
* Check find-index for documentation on where parameter.
* 
* Usable with ->
*/
potpuri.core.find_first = (function find_first(coll,where){
var pred = potpuri.core.create_predicate(where);
return cljs.core.some(((function (pred){
return (function (p1__37245_SHARP_){
if(cljs.core.truth_((function (){var G__37247 = p1__37245_SHARP_;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__37247) : pred.call(null,G__37247));
})())){
return p1__37245_SHARP_;
} else {
return null;
}
});})(pred))
,coll);
});
/**
* Finds the first element in collection matching where parameter and
* replaces that with v.
* 
* Implementation depends on collection type.
*/
potpuri.core.assoc_first = (function assoc_first(coll,where,v){
var pred = potpuri.core.create_predicate(where);
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,potpuri.core.find_index(coll,pred),v);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred){
return (function (x){
if(cljs.core.truth_((function (){var G__37249 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__37249) : pred.call(null,G__37249));
})())){
return v;
} else {
return x;
}
});})(pred))
,coll);

}
});
/**
* Finds the first element in collection matchin where parameter
* and updates that using f. F is called with current value and
* rest of update-first params.
* 
* Implementation depends on collection type.
* @param {...*} var_args
*/
potpuri.core.update_first = (function() { 
var update_first__delegate = function (coll,where,f,args){
var pred = potpuri.core.create_predicate(where);
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [potpuri.core.find_index(coll,pred)], null),f,args);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred){
return (function (x){
if(cljs.core.truth_((function (){var G__37251 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__37251) : pred.call(null,G__37251));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,args);
} else {
return x;
}
});})(pred))
,coll);

}
};
var update_first = function (coll,where,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__37252__i = 0, G__37252__a = new Array(arguments.length -  3);
while (G__37252__i < G__37252__a.length) {G__37252__a[G__37252__i] = arguments[G__37252__i + 3]; ++G__37252__i;}
  args = new cljs.core.IndexedSeq(G__37252__a,0);
} 
return update_first__delegate.call(this,coll,where,f,args);};
update_first.cljs$lang$maxFixedArity = 3;
update_first.cljs$lang$applyTo = (function (arglist__37253){
var coll = cljs.core.first(arglist__37253);
arglist__37253 = cljs.core.next(arglist__37253);
var where = cljs.core.first(arglist__37253);
arglist__37253 = cljs.core.next(arglist__37253);
var f = cljs.core.first(arglist__37253);
var args = cljs.core.rest(arglist__37253);
return update_first__delegate(coll,where,f,args);
});
update_first.cljs$core$IFn$_invoke$arity$variadic = update_first__delegate;
return update_first;
})()
;
/**
* Append an element to a collection. If collection is nil,
* creates vector instead of sequence.
* 
* Usable with update-in, ->
*/
potpuri.core.conjv = (function conjv(coll,el){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY).call(null,coll,el);
});
/**
* Prepend an element to a collection. Returns a vector.
* 
* Usable with update-in, ->
*/
potpuri.core.consv = (function consv(coll,el){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,el,coll);
});
/**
* Map the keys of given associative collection using function.
*/
potpuri.core.map_keys = (function map_keys(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(function (){var G__37255 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37255) : f.call(null,G__37255));
})(),v);
}),cljs.core.transient$(cljs.core.empty(coll)),coll));
});
/**
* Map the values of given associative collection using function.
*/
potpuri.core.map_vals = (function map_vals(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__37257 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37257) : f.call(null,G__37257));
})());
}),cljs.core.transient$(cljs.core.empty(coll)),coll));
});