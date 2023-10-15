var tools = {
    add: (...nums) => {
        let sum = 0;
        nums.map(item => sum += item)
        return sum
    }
}

module.exports = tools