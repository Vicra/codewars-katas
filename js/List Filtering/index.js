function filter_list(l) {
    // Return a new array with the strings filtered out
    let l2 = l.filter(item => Number.isInteger(item))
    return l2;
}