class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen: { [key: number]: number } = {}

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const complement = target - num 
            if(seen[complement] !== undefined){ 
                return [seen[complement], i] 
            }
            seen[num] = i 
        }

        return []
    }
}
