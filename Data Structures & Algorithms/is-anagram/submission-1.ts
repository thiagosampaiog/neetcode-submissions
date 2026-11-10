class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }
        const appears = {}


        for(const char of s){
            if(appears[char]){
                appears[char]++
            } else {
                appears[char] = 1
            }
        }

        for(const char of t){
            if(appears[char] && appears[char] > 0){
               appears[char]--
            } else {
               return false
            }
        }

        return true
    }
}
