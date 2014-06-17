/*
 * Copyright 2014 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayCount(args, count) {
  switch(args.length) {
  case 0:
    return args;
  case 1:
    var first = args[0];
    if (first instanceof Array) {
      if (first.length <= count) {
        return first;
      }
      return Array.prototype.slice.call(first, 0, count);
    }
    return [first];
  default:
    if (args.length <= count) {
      return args;
    }
    return Array.prototype.slice.call(args, 0, count);
  }
}
function asArray(args, length) {
  if (!(args instanceof Array || args.callee))
    return [args];
  var sliceLength = (length) ? length : args.length;
  switch (sliceLength) {
  case 0:
    return [];
  case 1:
    var first = args[0];
    return (first instanceof Array) ? first : [first];
  default:
    return Array.prototype.slice.call(args, 0, sliceLength);
  }
}
function copyProperties(source, target) {
  var dest = (arguments.length > 1) ? target : {};
  for (var key in source) {
    dest[key] = source[key];
  }
  return dest;
}
function first(args) {
  switch(args.length) {
  case 0:
    return {};
  case 1:
    var firstArg = args[0];
    if (firstArg instanceof Array) {
      return firstArg[0];
    }
    return firstArg;
  default:
    return args[0];
  }
}
function isBoolean(value) {
  return (value instanceof Boolean || (typeof value) === 'boolean');
}
function isNumber(value) {
  return (value instanceof Number || (typeof value) === 'number');
}
function isSet(value) {
  return (value !== null && value !== undefined);
}
function isString(value) {
  return (value instanceof String || (typeof value) === 'string');
}
function requestErrorHandler(e) {
  console.log('problem with request' +
      ((e.message !== undefined) ? ': '+e.message : ''));
  throw new Error(e.message);
}

module.exports = {
    asArray:             asArray,
    arrayCount:          arrayCount,
    copyProperties:      copyProperties,
    first:               first,
    isBoolean:           isBoolean,
    isNumber:            isNumber,
    isSet:               isSet,
    isString:            isString,
    requestErrorHandler: requestErrorHandler
};