/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    var twice = function(head) {
        if(!head){
            return 0;
        }
        var dValue = head.val * 2 + twice(head.next);
        head.val = dValue % 10;
        return Math.floor(dValue/10);
    }
    var carry = twice(head);
    if(carry > 0){
        head = new ListNode(carry, head);
    }
    return head;
    
};