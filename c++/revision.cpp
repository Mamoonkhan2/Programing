#include <iostream>
#include <vector>
#include <cmath>
#include <string>
#include <algorithm>
#include <cstring>
using namespace std;
bool isCow(vector<int> stall, int cow, int allowedmidistance);
void printVector(vector<int> nums)
{
    for (int Value : nums)
    {
        cout << Value;
    }
    cout << endl;
}
bool student(vector<int> vec, int allowed, int student)
{
    int ss = 1;
    // 2,1,3,4,5,6
    int sum = 0;
    for (int i = 0; i < vec.size(); i++)
    {
        if (sum + vec[i] > allowed)
        {
            sum = vec[i];
            ss++;
        }
        else
        {
            sum += vec[i];
        }
    }
    return ss != student ? false : true;
}
bool canprint(vector<int> vec, int allowedtime, int painters);
int main()
{
    /*
        ||||||||||||||||||||||||||||2||0||2||5||||T||U||E|||A||U||G||||||||||||||||||||||||||||||||||||||||||||||
        |||||||*FAZI*||||||||||M|||||A|||||M|||||O||||O|||N||||||R||E||V||I||S||I|||O||N|||||||||||||||||||||||||
        |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    */
    // find in a prime
    // int n;
    // cout << "enter the n : ";
    // cin >> n;
    // for (int i = 2; i < sqrt(n); i++) {
    //     if (n % i == 0) {
    //         cout << "it is not a prime number" << endl;
    //         return 0;
    //     }
    // }
    // cout << "it is a prime number" << endl;
    // finding the intersection of the two arrays
    // int a[] = {, 2, 3, 4, 5};
    // int b[] = {3, 4, 5, 6, 7};
    // int as = sizeof(a) / sizeof(a[0]);
    // int bs = sizeof(b) / sizeof(b[0]);
    // for (int i = 0; i < as; i++) {
    //     for (int j = 0; j < bs; j++) {
    //         if(ezist(b,bs,a[i])){
    //             cout<<"intersection from perspective of a : "<<i<<endl;
    //             break;
    //         }
    //     }

    // }
    // for (int i = 0; i < arrs; i++) {
    //     if(arr[i] == n){
    //         cout<<"find the value is on indz : "<<i;
    //     }
    // }
    // FindTheUniqueofArry
    // vector <int> arr = {1,2,3,4,1,2,3};
    // sort(arr.begin(), arr.end());
    // for (int i = 0; i < arr.size(); i++) {
    //     int freq = 0;
    //     for (int J = 0; J < n; J++) {
    //         if(arr[i] == arr[J]){
    //             freq++;
    //         }
    //         else if(freq == 1|| (arr[i] != arr[i-1] && arr[i] != arr[i+1])){
    //             cout<<arr[i];
    //             break;
    //         }
    //         else{
    //             freq = 0;
    //         }
    //     }

    //     }
    // for (int i = 1; i < arr.size(); i++) {
    //     if((arr[i] != arr[i-1])&&(arr[i] !=arr[i+1])){
    //         cout<<arr[i]<<" ";
    //     }
    // }
    // FindForSingleNumber
    // vector <int> arr= {1,2,3,5,2,3,1};
    // int ans= 0;
    // for (int i = 0; i < arr.size(); i++) {
    //     ans^=arr[i];
    // }
    // cout<<ans;
    // SumOfDigit(111);
    // int count = 111;
    // int current = 0;
    // while (count!=0)
    // {
    //     current += count%10;
    //     count /=10;

    // }
    // cout<<current;
    // DecimalToBinary
    // int n = 5;
    // int ans = 0,pows = 1;
    // while(n!=0){
    //     int current = n%2;
    //     n /=2;
    //     ans += (current*pows);
    //     pows*=10;
    // }

    // // 101 binary to decimal
    // int anss = 0,powss= 1;
    // while(ans!=0){
    //     int LDigit = ans%10;
    //     ans/=10;
    //     anss+= LDigit*powss;
    //     powss*=2;
    // }
    // cout<<anss;
    // find that a value is power of 2 or not
    // int n = 5;
    // if(n&(n-1) == 0){
    //      cout<<"it is power of n";
    // }
    // else{
    //     cout<<"it is not power of 2";
    // }

    // pointers
    // int a = 4;
    // int *p = &a;
    // int **pp = &p;
    // int *null = NULL;
    // cout<<null;
    // int a[5] = {1,2,3,4,5};
    // for (int i = 0; i < 5; (*a)++,i++) {
    //     cout<<*a;

    // }
    // exeptforindexproductofall
    // brute force apporach
    // vector <int> vec = {1,2,3,4};
    // int n = vec.size();
    // for (int i = 0; i < n; i++) {
    //     int f = 1;
    //     for (int j = 0; j < n; j++) {
    //         if(i!=j){
    //             // cout<<i<<endl;
    //             f *= vec[j] ;
    //         }
    //     }
    //     cout<<f;
    // }
    // optimize way
    // vector <int> arr = {1,2,3,4};
    // vector <int> ans(arr.size(),1);
    // int prefix = 1 ;
    // int suffix = 1 ;
    // for (int i = 1; i < arr.size(); i++) {
    //     prefix *= arr[i-1];
    //     ans[i] *= prefix;
    // }
    // for (int i = arr.size()-2; i >= 0; i--) {
    //     suffix *= arr[i+1];
    //     ans[i] *= suffix;
    // }

    // for (int i = 0; i < arr.size(); i++) {

    //     cout<<ans[i];
    // }
    // MaxWaterinthecontaner
    // int maxwater = 0;
    // for (int i = 0; i < height.size(); i++) {
    //     int w =0;
    //     int h =0;
    //     int area = 0;
    //     for (int j = i+1; j < height.size(); j++) {
    //         w = j-i;
    //         h = min(height[i],height[j]);
    //         area = w*h;
    //         maxwater= max(maxwater,area);
    //     }

    // }
    // MaxWatertwopointerApproach
    // vector <int> height = {1,2,8,4,5};
    // int h = height.size();
    // int i =0;
    // int j =h-1;
    // int maxwater = 0;
    // while(i<j){
    //     int width = j-i;
    //     int h = min(height[i],height[j]);
    //     int area = width * h;
    //     maxwater = max(maxwater,area);
    //     if(height[i]<height[j]){
    //         i++;
    //     }else{
    //         j--;
    //     }
    // }
    // cout<<maxwater;
    // vector <int> arr = {1,2,3,4,5};
    // int n = arr.size();
    // for (int i = 0; i < n; i++) {
    //     for (int j = i; j < n; j++) {
    //         for (int k = j; k < n; k++) {
    //             cout<<arr[k];

    //         }
    //         cout<<" ";

    //     }
    //     cout<<endl;

    // }
    // subarraysum
    // vector <int> arr = {2,-2,-2,2,2};
    // int n = arr.size();
    // int currentsum = 0;
    // int maxs=-34344;
    // for (int i = 0; i < n; i++) {
    //     for (int j = i; j < n; j++) {
    //         currentsum+=arr[j];
    //     }
    //     maxs = max(maxs,currentsum);
    // }
    // cout<<maxs;
    // more algorithms
    // for (int i = 0; i < arr.size(); i++) {
    //     currentsum += arr[i];
    //     if(currentsum<0){
    //         currentsum = 0;
    //     }

    // }
    // cout<<currentsum;
    //  pow(x,n) // brute force approach
    //    long int z = 3;
    //     int a = 5;
    //     long int ans = 1;
    //     for (int i = 0; i < a; i++) {
    //         ans *= z;

    //     }
    // optimize approach
    // int x = 3;
    // int n = 5;
    // long int ans = 1;
    // while (n!=0)
    // {
    //     if(n%2 == 1){
    //         ans *= x;
    //     }
    //     x *= x;
    //     n/=2;
    // }
    // cout<<ans;
    // bestDaytosell1
    // brut force approach of it
    // vector <int> stock = {4,2,3,1,3};// best price is 2
    // int maxprofit = 0;
    // for (int i = 0; i < stock.size(); i++) {
    //     int bestbuy = stock[i];
    //     int currentday = stock[i];
    //     int currentprofit = 0;
    //     for (int j = i; j < stock.size(); j++) {
    //         bestbuy = max(bestbuy,stock[j]);// it will find the best day or the higher day to sell the stock it
    //         currentprofit = bestbuy - currentday;// it will then minus the higher from the low to give us the profit
    //         maxprofit = max(maxprofit,currentprofit);
    //     }
    // }
    // cout<<maxprofit;
    // opptimize of it
    // int minsofor = stock[0];
    // int maxprofit = 0;
    // for (int i = 0; i < stock.size(); i++) {
    //     minsofor = min(minsofor,stock[i]);
    //     int profit = stock[i] - minsofor;
    //     maxprofit = max(maxprofit,profit);
    // }
    // cout<<maxprofit;
    // binary search algorithm
    // vector <int> arr = {1,2,3,4,5,6,7,8,9,10};
    // int t = 8;
    // int st = 0;
    // int end = arr.size();
    // while (st<=end)
    // {
    //     int mid = (st + end)/2;
    //     if (arr[mid]==t){
    //         cout<<mid;
    //         break;
    //     }
    //     else if(t>arr[mid]){
    //         st = mid +1;
    //     }else
    //     {
    //         end = mid -1;
    //     }
    // }
    // rotated sorted array1
    // vector <int> vec = {3,4,5,6,0,1,2};
    // int st = 0;
    // int end = vec.size();
    // int t = 0;
    // while(st<=end){
    //     int mid = st +(end-st)/2;
    //     // cout<<mid;
    //     if(vec[mid] == t){
    //     cout<<mid<<endl;
    //     break;
    //     }
    //     else if(vec[st]<=vec[mid])//left sorted
    //     {
    //        if(vec[st]<=t&&vec[mid]>=t){
    //             end  = mid - 1;
    //        }
    //        else{
    //             st = mid +1;
    //        }
    //     }
    //     else
    //     {
    //         // vector <int> vec = {3,4,5,{6},0,1,2};
    //         if(vec[mid]>=t&&vec[end]>=t){
    //             st = mid+1;
    //         }
    //         {
    //             end = mid - 1;
    //         }
    //     }
    // }
    // peak element
    // vector<int>m={1,2,3,4,8,2,1};
    /*       8
            //\\
    */
    // int st  = 0;
    // int end = m.size();
    // while(st<=end){
    //     int mid = (st + end)/2;
    //     if(m[mid]>m[mid+1]&&m[mid]>m[mid-1]){
    //         cout<<mid;
    //         break;
    //     }
    //     // {1,2,3,{4},8,2,1}
    //     else if(m[mid]>m[mid-1])//increasing
    //     {
    //         st = mid + 1;
    //     }
    //     else
    //     {
    //         end = mid -1;
    //     }
    // }
    // vector <int> arr={2,1,3,4,5,6};
    // int st = 0;
    // int end = arr.size()	;
    // while (st<=end)
    // {
    //     int mid = st + (end - st )/2;
    //     if(arr[mid]!=arr[mid -1]&&arr[mid]!=arr[mid+1]){
    //         cout<<mid;
    //         break;
    //     }
    //     if(mid%2 == 0){//it is even
    //         if(arr[mid] == arr[mid-1]){
    //             end = mid-1;
    //         }
    //         else{
    //             st = mid +1;
    //         }
    //     }
    //     else{// odd
    //        if(arr[mid] == arr[mid -1]){
    //         st = mid+1;
    //        }else{
    //         end = mid-1;
    //        }
    //     }
    // }
    // book allocation problem
    // vector <int> book={2,1,3,4,5,6};
    // int sum = 0;
    // for(int i :book){
    //     sum+=i;
    // }
    // int min = 0;
    // int max = sum;
    // int ans = 0;
    // while(min<=max)
    // {
    //     int mid = (min + max )/2;
    //     if(student(book,mid,3)){
    //         ans = mid;
    //         max = mid - 1;
    //     }
    //     else{
    //         min = mid + 1;
    //     }
    // }
    // cout<<ans<<" ans ";
    // aggrasive cow problem
    // vector <int> stall = {2,1,3,4,5,6};
    // sort(stall.begin(),stall.end());
    // int painter = 3;
    // int sum = 0;
    // for (int i = 0; i < stall.size(); i++) {
    //     sum += stall[i];
    // }
    // int st = 0;
    // int n = stall.size();
    // int end =sum;
    // int ans = 0;
    // while (st<=end)
    // {
    //     int mid = (st + end )/2;
    //     // cout<<mid<<" ";
    //     if(canprint(stall,mid,3)){
    //         ans = mid;
    //         end = mid -1;
    //     }
    //     else{
    //         st = mid +1;
    //     }
    // }
    // cout<<ans;
    //{5,3,4,2,1}
    //{5,4,3,2,1}
    // buble
    // for (int i = 0; i < arr.size(); i++) {

    //     for (int j = 0; j < arr.size()-i-1; j++) {
    //         if(arr[j]>arr[j+1])
    //         {
    //             swap(arr[j],arr[j+1]);
    //         }
    //     }

    // }

    // insertion sort algorithms

    // for (int i = 0; i < arr.size(); i++) {
    //     int small = i;
    //     for (int j = i+1; j < arr.size(); j++) {
    //         if(arr[j]<arr[small]){
    //             small = j;
    //         }
    //     }
    //     swap(arr[i],arr[small]);
    // }
    // salection sort algorithms
    //                     vector <int> arr = {5,3,4,2,1};
    //                     // 1,2,3,4,5
    //                     //5,5,33,3,33
    //                     int n = arr.size();
    //                     for (int i = 1; i < n; i++)
    //                     {
    //                         int unsorted = arr[i];
    //                         int previous = i - 1;
    //                         while(previous>=0&&arr[previous]>unsorted){
    //                             arr[previous+1] = arr[previous];
    //                             previous --;
    //     }
    //     swap(arr[previous+1],unsorted);
    // }
    // sort 0,1,2 brute force
    // int z = 0;
    // int o = 0;
    // int t = 0;

    // for (int i = 0; i < arr.size(); i++) {
    //     if(arr[i] == 0){
    //         z++;
    //     }
    //     else if(arr[i] == 1){
    //         o++;
    //     }
    //     else{
    //         t++;
    //     }

    // }
    // cout<<z<<endl;
    // int i = 0;
    // while (i!=arr.size())
    // {
    //     if(z!=0){
    //         arr[i++] = 0;
    //         z--;
    //     }
    //     else if (o!=0){
    //         arr[i++] = 1;
    //         o--;
    //     }else{
    //         arr[i++] = 2;
    //         t--;
    //     }
    // }
    // vector <int> arr = {0,1,2,0};
    // int low = 0;
    // int mid = 0;
    // int high = arr.size()-1;
    // while(mid <= high){
    //     if(arr[mid] == 0){
    //         swap(arr[low],arr[mid]);
    //         low++;
    //         mid++;
    //     }
    //     else if(arr[mid]==1)
    //     {
    //         mid++;
    //     }
    //     else if(arr[mid]==2){
    //         swap(arr[high],arr[mid]);
    //         high--;
    //     }
    // }
    // next permutation
    // vector <int> arr = {5,1,4,3,2};
    // int pivit = -1;
    // int n = arr.size();
    // for (int i = n-2; i > 0; i--) {
    //     if(arr[i]<arr[i+1]){
    //         pivit = i;
    //         break;
    //     }

    // }
    // for(int i = n-1;i>pivit;i--){
    //     if(arr[i]>arr[pivit]){
    //         swap(arr[i],arr[pivit]);
    //         break;
    //     }
    // }
    // int i = pivit +1;
    // int j = n-1;
    // while (i<j)
    // {
    //     if(arr[i]>arr[j])
    //     {
    //         swap(arr[i++],arr[j--]);
    //     }
    // }

    for (int i : arr)
    {
        cout << i;
    }
    return 0;
}
bool canprint(vector<int> vec, int cow, int painters)
{
    int cows = 1;
    int time = vec[0];
    for (int i = 1; i < vec.size(); i++)
    {
        if (vec[i] - time >= cow)
        {
            cows++;
            time = vec[i];
        }
    }
    // cout<<cows;
    return cows <= painters;
}
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
