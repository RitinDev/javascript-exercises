const palindromes = function (str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) < 'a' || str.charAt(left) > 'z') {
            left++;
            continue;
        }

        if (str.charAt(right) < 'a' || str.charAt(right) > 'z') {
            right--;
            continue;
        }

        if (str.charAt(left) != str.charAt(right)) return false;

        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
