#include <bits/stdc++.h>
using namespace std;

int cookies(int k, vector<int> A)
{
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 0; i < A.size(); i++)
    {
        pq.push(A[i]);
    }
    int count = 0;
    while (pq.top() < k)
    {
        int first = pq.top();
        pq.pop();
        int second = pq.top();
        pq.pop();
        pq.push(first + second * 2);
        count++;

        if (pq.size() == 1)
        {
            if (pq.top() < k)
            {
                return -1;
            }
        }
    }
    return count;
}