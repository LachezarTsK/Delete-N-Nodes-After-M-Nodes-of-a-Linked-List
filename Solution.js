
/**
 * @param {ListNode} head
 * @param {number} keepConsecutiveNodes
 * @param {number} removeConsecutiveNodes
 * @return {ListNode}
 */
var deleteNodes = function (head, keepConsecutiveNodes, removeConsecutiveNodes) {
    let current = head;

    while (current !== null) {

        let previous = current;
        for (let i = 1; i <= keepConsecutiveNodes && current !== null; ++i) {
            previous = current;
            current = current.next;
        }

        for (let i = 1; i <= removeConsecutiveNodes && current !== null; ++i) {
            current = current.next;
        }
        previous.next = current;
    }
    return head;
};

/*
 Function ListNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
