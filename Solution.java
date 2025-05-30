
public class Solution {

    public ListNode deleteNodes(ListNode head, int keepConsecutiveNodes, int removeConsecutiveNodes) {
        ListNode current = head;

        while (current != null) {

            ListNode previous = current;
            for (int i = 1; i <= keepConsecutiveNodes && current != null; ++i) {
                previous = current;
                current = current.next;
            }

            for (int i = 1; i <= removeConsecutiveNodes && current != null; ++i) {
                current = current.next;
            }
            previous.next = current;
        }
        return head;
    }
}

/*
Class ListNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {

    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
