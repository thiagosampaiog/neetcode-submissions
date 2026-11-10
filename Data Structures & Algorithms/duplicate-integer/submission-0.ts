class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const items = new Set<number>()
        for(const num of nums){
            if(items.has(num)){
                return true
            }
            items.add(num);
        }
        return false;
    }
}
