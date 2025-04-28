1. Line 12 would print `3`, which is the value of the index `i` after the 3 iterations of loop. The `var` variable `i` remains accessible in the function even after the loop.
2. Line 13 would print `150`, since the last assignment for `discountedPrice` occurs at the last iteration of the loop, discounting `300` by `0.5`.
3. Line 14 would also print `150`, since the last assignment for `finalPrice` occurs at the last iteration of the loop, discounting `300` by `0.5` and rounding the result to cents.
4. The function would return `[50, 100, 150]`, which are the discounted result of 100, 200, and 300 at 50% (0.5).
5. Line 12 would raise `ReferenceError: i is not defined`. Because the `i` variable is declared within the `for` loop, it becomes inaccessible after the loop.
6. Line 13 would likewise raise `ReferenceError: discountedPrice is not defined`. Because the `discountedPrice` variable is declared within the `for` loop, it becomes inaccessible after the loop. 
7. Line 14 would print `150`, the final value of `finalPrice` calculated in the `for` loop at `i` being `prices.length - 1`.
8. The function would return `[50, 100, 150]`, which are the discounted result of 100, 200, and 300 at 50% (0.5).
9. Line 11 would raise `ReferenceError: i is not defined`. Because the `i` variable is declared within the `for` loop, it becomes inaccessible after the loop.
10. Line 12 would print `3`, which is the length of the input array of prices.
11. The function would return `[50, 100, 150]`, which are the discounted result of 100, 200, and 300 at 50% (0.5).
12. The responses are as follows:
- **A.** `student.name`
- **B.** `student["Grad Year"]`
- **C.** `student.greeting()`
- **D.** `student["Favorite Teacher"]["name"]`
- **E.** `student.courseLoad[0]`
13.  The responses are as follows:
- **A.** `"32"`: `2` is converted to the string `"2"` and then concatenated.
- **B.** `1`: `"3"` is converted to the number `3` before subtraction.
- **C.** `3`: `null` is converted to the number `0` before addition.
- **D.** `"3null"`: `3` is converted to the string `"3"`, and `null` to the string `"null"`, before addition.
- **E.** `4`: `true` is converted to the number `1` before addition.
- **F.** `0`: `false` is converted to the number `0`, and `null` to the number `0`, before addition.
- **G.** `"3undefined"`: `undefined` is converted to the string `"undefined"` before concatenation.
- **H.** `NaN`: Subtraction cannot happen, and the result is Not a Number (`NaN`).
14.   The responses are as follows:
- **A.** `true`: `"2"` is converted to the number `2` before comparison.
- **B.** `false`: In lexicographic ordering, the first characters `"1" < "2"`, so `"2" < "12"`, not the other way around.
- **C.** `true`: The string `"2"` is converted to the number `2` for comparison.
- **D.** `false`: The strict, type-enforced equality fails because the types of the left- and right- hand sides (`number` and `string`) differ.
- **E.** `false`: `true` is converted to the number 1 before comparison. But `1 != 2`.
- **F.** `true`: `Boolean(2)` is `true`, and both sides are strictly equal.

15. The `==` operator does not enforce that both sides have the same type. For example, `1 == "1"` holds. In contrast, `===` enforces that both sides have the same type if evaluated to `true`. Conceptually, one might say "`a === b` iff `typeof a == typeof b && a == b`."

16. See [part2-question16.js](part2-question16.js)

17. `modifyArray([1, 2, 3], doSomething)` would return `[2, 4, 6]`. Note that `modifyArray(arr, cb)` is equivalent to `arr.map(cb)`. It iterates over each element of the input array, applies the callback, and aggregates the outputs into an array of the same length and ordering as the input.

18. See [part2-question18.js](part2-question18.js)

19. The code would print
```
1
4
3
2
```

**Explanation:** It's obvious that 1 is printed first and 2 the very last. As to the ordering of 3 and 4, the [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) specify that the callback provided would be run in "the next event cycle," which is after the printing of 4.
