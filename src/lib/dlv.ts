/*
MIT License

Copyright (c) 2024 Jason Miller <jason@developit.ca> (http://jasonformat.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param obj The object to walk
 * @param key The key path to walk the object with
 * @param def A default value to return if the result is undefined
 *
 * @example
 * dlv(obj, "a.b.c.d")
 * @example
 * dlv(object, ["a", "b", "c", "d"])
 * @example
 * dlv(object, "foo.bar.baz", "Hello, default value!")
 */
export function dlv<T = any>(object: any, key: Array<string> | string, def?: T, p?: number, undef?: never): T | undefined {
	key = Array.isArray(key) ? key : key.split(".");

	for (p = 0; p < key.length; p++) {
		const k = key[p];
		object = k != undefined && object ? object[k] : undef;
	}

	return object === undef ? def : object;
}
