#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
// now we are starting the Sorting algorithms
// the first one is buble sort algorithms
void bublesort(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {
        bool is_swap = false;
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] >= arr[j + 1])
            {
                is_swap = true;
                swap(arr[j], arr[j + 1]);
            }
        }
        if (is_swap == false)
        {
            break;
        }
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i];
    }
}
// insertion sort algorithms
// one part is sorted and other is unsorted
void insertionSort(int arr[], int n)
{
    //[3,2,1]
    for (int i = 0; i < n - 1; i++)
    {
        int smalestidx = i; // unsorted part of array
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[smalestidx])
            {
                smalestidx = j;
            }
            swap(arr[i], arr[smalestidx]);
        }
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i];
    }
}
// the selection sort is like a card first we pick a key or the current  elemnt then go to the sorted part of arr and find the good place to place the value

void selectionSort(int arr[], int n)
{
    // the first loop will go for the unsorted by default value
    for (int i = 1; i < n; i++)
    {
        //[4,1,3,2]
        int cur = arr[i]; // this is the by default first unsorted part value
        int pre = i - 1;  // this the first value of the sorted part
        while (pre >= 0 && arr[pre] > cur)
        {                            // this is the mean logic where we will shift the greater value to the right
            arr[pre + 1] = arr[pre]; // so if the arr is like this [4,1,] so it will shift the 4 to right --> [4,4,]
            pre--;                   // and also if the j = 0 like [4,1] = [0,1] after the loop it will became [4,4]== j will become -1;
        }
        arr[pre + 1] = cur; // that why we are using the pre+1 because the j will become from j=0 --> j=-1
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}
// dnf detch national flag algorithms three rule
/*
    vision is that first at the starting time the algorithm will have the value in unsorted manner
    low---mid---unsortedPart---high --> in starting the unsorted part is between mid---***--high then
    the low increace and the also the mid and the high decrease
    then it become like
    low---mid---high
    000---111---2222
*/
// 0s from 0 to low-1
// 1s from low to mid-1
// 2s from high to n-1
// unsorted part mid to high
void sort01s(vector<int> &arr)
{ // this is the brute force approach to find the 0s1s2s
    int zero = 0, one = 0, two = 0;
    for (int i : arr)
    {
        if (i == 0)
            zero++;
        if (i == 1)
            one++;
        if (i == 2)
            two++;
    }
    for (int i = 0; i < arr.size(); i++)
    {
        if (zero > 0)
        {
            arr[i] = 0;
            zero--;
        }
        else if (one > 0)
        {
            arr[i] = 1;
            one--;
        }
        else if (two > 0)
        {
            arr[i] = 2;
            two--;
        }
    }
    for (int i : arr)
    {
        cout << i;
    }
}

// detch national flag approach
void dnf(vector<int> &arr)
{
    int low = 0, mid = 0, high = arr.size() - 1;
    // {0,2,1,0,2,1,0,2,1}
    while (mid <= high)
    {
        if (arr[mid] == 0) // 0
        {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        };
        if (arr[mid] == 1) // 1
        {
            mid++;
        };
        if (arr[mid] == 2) // 2
        {
            swap(arr[high], arr[mid]);
            high--;
        };
    }
    for (int i : arr)
    {
        cout << i;
    }
}

// merging two array
/*
we have some conditoin here like when a --> 1,2,3 b --> 5,6,7 then it will merge will
but if the last is the smalest of a it will become the first or last according to secuation
also we will need to make anator loop after the merging loop so that if the i <0 like int he case of a -->{5,6,7} b -->1,2,3
in this case we will need the aditional loop to set the value of j in back_loop becase the idx will in the here| so will start
from here and then start fetting the value of the j in the a so that all loop come in one loop a
*/
void mergarray(int a[], int i, int b[], int j)
{
    int idx = i + j;
    while (j >= 0 && i >= 0)
    {
        if (a[i] >= b[j])
        {
            a[idx--] = a[i--];
        }
        else
        {
        }
    }
}
/*
    next perumutation
    it is the diffrent sequance of the number or deffrent form of the number 1,2,3 --> 3,1,2 etc
    there is a brute force approch for it where we have to find all the possible form of the number then have to find the next perumutation
    but we will use the
    lexigraphically next permutation
    dictonary like structure like a,c,b -->  b,a,c | 1,2,3 --> 1,3,2 --> 2,1,3
    5,1,4,3,2
*/
void nextpermutation(vector<int> &arr)
{
    int n = arr.size();
    int pivit = -1;
    for (int i = n - 2; i >= 0; i--)
    {                            // here we will start the loop in the backward form to find the pivit because the pivit will form where the permutatoin will start
        if (arr[i] < arr[i + 1]) // here will find the if the value is leesthen the i + 1 then it is the pivit
        {
            pivit = i;
            break;
        }
    }
    cout << pivit << endl;
    if (pivit == -1) // this will mean that there is no pivit in the case 5,4,3,2,1 so just reverse it or it first permutation --> 1,2,3,4,5
    {
        int i = 0;
        int j = n - 1;
        while (i < j)
        {
            swap(arr[j--], arr[i++]);
        }
    }
    else // if we find the  pivit
    {
        for (int i = n - 1; i > pivit; i--)
        { // now we have to find the greater value than pivit and swap it with the pivit
            if (arr[i] > arr[pivit])
            {
                swap(arr[pivit], arr[i]);
                cout << arr[i] << " ";
            }
        }
        // after finding the pivit and swap it we will have the decreasing part after the pivit now we will change that part to the increasing
        // or reverse it after the pivit + 1
        int i = pivit + 1;
        int j = n - 1;
        while (i <= j)
        {
            swap(arr[j--], arr[i++]);
        }
    }
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i];
    }
}

int main()
{
    vector<int> arr = {5, 1, 4, 3, 2};
    nextpermutation(arr);

    return 0;
}