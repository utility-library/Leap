function MatchAllRegex(string, regex) {
    let m
    let result = []

    while ((m = regex.exec(string)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++
        }
        
        // The result can be accessed through the `m`-variable.
        result.push(m)
    }

    return result
}

export {MatchAllRegex}