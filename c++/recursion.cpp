#include <iostream>
#include <vector>
#include <map>
using namespace std;
void printUpToN(int n){
    if(n == 0){
        return;
    }
    cout<<n<<endl;
    printUpToN(n-1);
}
int sumOfToN(int n){//4/3/2/1
    if(n == 1){
        return 1;
    }

    return n + sumOfToN(n-1);//3//2//1
}
int factorial(int n){//4/3/2/1
    if(n == 1){
        return 1;
    }

    return n * factorial(n-1);//3//2//1
}
map<int,int> data;
bool isSorted(vector<int> arr,int n){
    if(n == 0 || n == 1) return true;
    return arr[n-1] >= arr[n-2] ;
    isSorted(arr,n-1);
}
int fabonanci(int n){
    if(n==0||n==1 ){
        return n;
    }
    
    auto it = data.find(n);
    // Check if key1 is found
    if (it != data.end()) {
       return it->second;
    }
    int first = fabonanci(n-1);
    int secound = fabonanci(n-2);
    data[n-1] = first;
    data[n-2] = secound; 
    return    first + secound;
}
int main(){
    int value = fabonanci(60);
    return 0 ;
}
