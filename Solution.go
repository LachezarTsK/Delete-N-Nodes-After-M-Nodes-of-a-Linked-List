
package main

func deleteNodes(head *ListNode, keepConsecutiveNodes int, removeConsecutiveNodes int) *ListNode {
    current := head

    for current != nil {

        previous := current
        nodeCount := 1
        for nodeCount <= keepConsecutiveNodes && current != nil {
            previous = current
            current = current.Next
            nodeCount++
        }

        nodeCount = 1
        for nodeCount <= removeConsecutiveNodes && current != nil {
            current = current.Next
            nodeCount++
        }
        previous.Next = current
    }
    return head
}

/*
Struct ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
*/
type ListNode struct {
    Val  int
    Next *ListNode
}
