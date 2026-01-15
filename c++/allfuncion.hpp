#include <iostream>
#include <vector>
using namespace std;

// the aggrasive cow problem
// finding the minum distance in the maximum of the cow stall that the cow will far away from each other so that they don't fight
bool isCow(vector<int> stall, int cow, int allowedmidistance)
{                                // this is to find that in how many distance the cow will not fight
    int cows = 1;                // we will place the first cow on first distance;
    int stalldistace = stall[0]; // from start we will place the first cow
    for (int i = 1; i < stall.size(); i++)
    {                                                     // now we will go from the starting distance to the ending to find the valid anser for the stall to place the cow that they don't fight
        if (stall[i] - stalldistace >= allowedmidistance) // the condition will find teh distance is greater or equal to allowed distance if it is so then we will place the cow becase they will not fight at this distance
        {
            cows++;
            stalldistace = stall[i];
        }
    }
    return cows <= cow; // now we will se that the cows which we place in the feild are greater than the actual cow so then we will return false becase the allowed distance is larger we need low distance
}

int StallCowSoNotFight(vector<int> &stall, int cow)
{
    sort(stall.begin(), stall.end()); // we will also sort the array to find the anser in the beter way
    // it will give us the min distance between the stall to place the cow that they don't fight
    int low = stall[0];
    int n = stall.size();
    int high = stall[n - 1] - stall[0];
    int ans = 0;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        // now we will find that where to go left or right
        if (isCow(stall, cow, mid)) // if we find the min possible value then we will go to right to find the max distance value
        {
            ans = mid;
            low = mid + 1;
        }
        else // if we don't find the min possible value then we will go to the higher allowed distance
        {
            high = mid - 1;
        }
    }
    return ans;
}