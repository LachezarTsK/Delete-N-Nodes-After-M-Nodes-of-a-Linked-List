
function deleteNodes(head: ListNode | null, keepConsecutiveNodes: number, removeConsecutiveNodes: number): ListNode | null {
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
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
