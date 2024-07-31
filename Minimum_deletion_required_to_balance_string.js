// we use DP approach becuase we know the previous states

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const n = s.length;
        const dp = new Array(n + 1).fill(0);
        let bCount = 0;

        // dp[i]: The number of deletions required to
        // balance the substring s[0, i)
        for (let i = 0; i < n; i++) {
            if (s[i] === 'b') {
                dp[i + 1] = dp[i];
                bCount++;
            } else {
                // Two cases: remove 'a' or keep 'a'
                dp[i + 1] = Math.min(dp[i] + 1, bCount);
            }
        }

        return dp[n];
};

//lets try optimized dp 

var minimumDeletions = function(s) {
    const n = s.length;
        let minDeletions = 0;

        let bCount = 0;

        // dp[i]: The number of deletions required to
        // balance the substring s[0, i)
        for (let i = 0; i < n; i++) {
            if (s[i] === 'b') {
                bCount++;
            } else {
                // Two cases: remove 'a' or keep 'a'
                minDeletions = Math.min(minDeletions + 1, bCount);
            }
        }

        return minDeletions;
};
