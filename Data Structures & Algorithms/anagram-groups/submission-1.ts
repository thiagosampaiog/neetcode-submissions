class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const saves = {}
        // { "sortedStr": [] }
        for(const str of strs){
           const sortedStr: string = [...str].sort().join('')
           if(!saves[sortedStr]){
            saves[sortedStr] = [str]
           } else {
            saves[sortedStr].push(str)
           }
        }

        return Object.values(saves)
    }
}
