#include <iostream>
int minimumMaximumOfArray(int arr[],int Size,bool FindMax){ // by default the function will exicute the minimum of the array
    if(FindMax){
        int max = INT16_MIN;
        for (int i = 0; i < Size; i++){
                if(arr[i] > max){
                max = arr[i];
            }
            return max;
        }
    }
    else{
        int min = INT16_MAX;
        for (int i = 0; i < Size; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }
    return -1;
}
int main(){
    int arr[5] = {5,5,4,8,6};
    std::cout<<minimumMaximumOfArray(arr,5,0);
    return 0;    
}