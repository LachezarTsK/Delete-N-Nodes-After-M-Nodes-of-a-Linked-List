
class Solution {

    fun deleteNodes(head: ListNode?, keepConsecutiveNodes: Int, removeConsecutiveNodes: Int): ListNode? {
        var current = head

        while (current != null) {

            var previous = current
            var nodeCount = 1
            while (nodeCount <= keepConsecutiveNodes && current != null) {
                previous = current
                current = current.next
                ++nodeCount
            }

            nodeCount = 1
            while (nodeCount <= removeConsecutiveNodes && current != null) {
                current = current.next
                ++nodeCount
            }
            previous!!.next = current
        }
        return head
    }
}

/*
Class ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this class.
 */
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}
