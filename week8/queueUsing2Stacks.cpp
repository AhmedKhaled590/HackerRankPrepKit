#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;

class queue
{
    stack<int> s1;
    stack<int> reversed;

public:
    void enqueu(int element)
    {
        s1.push(element);
    }

    void dequeu()
    {
        if (reversed.empty())
        {
            while (!s1.empty())
            {
                reversed.push(s1.top());
                s1.pop();
            }
        }
        reversed.pop();
    }

    void print()
    {

        if (reversed.empty())
        {
            while (!s1.empty())
            {
                reversed.push(s1.top());
                s1.pop();
            }
        }
        cout << reversed.top() << endl;
    }
};

int main()
{
    queue que;
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int q;
    cin >> q;
    while (q--)
    {
        int type, element = 0;
        cin >> type;
        if (type == 1)
        {
            cin >> element;
            que.enqueu(element);
        }
        else if (type == 2)
        {
            que.dequeu();
        }
        else if (type == 3)
        {
            que.print();
        }
    }
    return 0;
}
