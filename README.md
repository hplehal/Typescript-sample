# Typescript Handbook #

This is a project that I personally created to improve my understanding of Typescript.
I will be adding to these consistently until I master Typescript!

## What is TypeScript? ##
TypeScript is a superset of Javascript. I uses the same doucumentation of JS.
Its main goal is to be a staatic typechecker for Javascript programs. It tries to prevent users from having Data Type errors.

## What are some Data Types TS uses? ##

Number -	a double-precision IEEE 754 floating point.\
String -	an immutable UTF-16 string.\
BigInt -	integers in the arbitrary precision format.
Boolean -	true and false.
Symbol -	a unique value usually used as a key.
Null -	equivalent to the unit type.
Undefined -	 also equivalent to the unit type.
Object -	similar to records.

There are also some other TS types to consider

unknown -	the top type.
never - 	the bottom type.
object literal -	eg { property: Type }
void - 	for functions with no documented return value
T[] - 	mutable arrays, also written Array<T>
[T, T] -	tuples, which are fixed-length but mutable
(t: T) => U -   functions
