
using namespace std;

/*
Struct ListNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
*/
struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {

public:
    ListNode* deleteNodes(ListNode* head, int keepConsecutiveNodes, int removeConsecutiveNodes) const {
        ListNode* current = head;

        while (current != nullptr) {

            ListNode* previous = current;
            for (int i = 1; i <= keepConsecutiveNodes && current != nullptr; ++i) {
                previous = current;
                current = current->next;
            }

            for (int i = 1; i <= removeConsecutiveNodes && current != nullptr; ++i) {
                current = current->next;
            }
            previous->next = current;
        }
        return head;
    }
};
