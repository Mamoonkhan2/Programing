#include <iostream>
#include <algorithm>
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
void bubleSortAlgo(int arr[],int n){
    int counter = 0;//0//1
    while (counter<n)//1
    {
        for (int j = counter+1; j < n; j++)
        {
            //3421//
            if(arr[counter]>arr[j]){//4>3//            
                std::swap(arr[counter],arr[j]);
            }        
        }
        counter++;
    }
        
    
    

}
int main(){
    int arr[4] = {4,3,2,1};
    // std::cout<<minimumMaximumOfArray(arr,5,0);
    bubleSortAlgo(arr,4);
    for (int i = 0; i < (sizeof(arr)/sizeof(int)); i++)
    {
        std::cout<<arr[i];
    }
    
    return 0;    
}