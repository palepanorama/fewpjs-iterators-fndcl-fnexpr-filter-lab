// Code your solution here
function findMatching(array, string) {
    let drivers = array.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return drivers;
}

function fuzzyMatch(array, letters) {
    let drivers = array.filter(driver => {
        return driver.toLowerCase().startsWith(letters.toLowerCase())
    })
    return drivers;
}

function matchName(array, string) {
    let drivers = array.filter(driver => {
        return driver.name.toString().toLowerCase() === string.toLowerCase()
    })
    return drivers;
}