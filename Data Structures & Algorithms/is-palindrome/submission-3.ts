class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        const isAlpha = (char: string): boolean => {
            return /[a-zA-Z0-9]/.test(char)
        }
        
        while(l < r){
           while(l < r && !isAlpha(s[l])){
             l++
           }
           while(l < r && !isAlpha(s[r])){
            r--
           }

           if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false
           }

           l++;
           r--;
        }
        return true;
    }
}
