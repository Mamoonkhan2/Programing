#include <iostream>
#include <vector>
#include <math.h>
#include <algorithm>
#include <stdexcept>
using namespace std;
int gcd(int a, int b)
{
    int gcd = 0;
    if (a == 0)
    {
        gcd = b;
    }
    if (b == 0)
    {
        gcd = a;
    }
    while (a != 0 && b != 0)
    {
        if (a > b)
        {
            a = a % b;
        }
        else
        {
            b = b % a;
        }
    }
    if (a == 0)
    {
        return b;
    }
    else
    {
        return a;
    }
}
int lcm(int a, int b)
{
    int g = gcd(a, b);
    return (a * b) / g;
}
int main()
{
    // finding the prime number using square root like
    // 16 / 1
    // 16 / 2
    // 16 / 3
    // 16 / 4
    // sieve of erastanes
    // int n = 103;
    // vector <int> isPrime(n+1,true);// it will go from {0,1,2--n}; also all the value will be true
    // for (int i = 2; i <= n; i++) {// it will go through all the loop
    //     if(isPrime[i])// mean it will check if the value is true so then we have to remove it multiple for 2 => 4,6,8,10 ----
    //     {
    //         for (int j = i*2; j <= n; j=j+i) {//int j = i*2 will become 4 then it will only update the conditional statemant like j=j+1 4+2=6
    //             isPrime[j] = false; // it will false the value like 4 will become false
    //         }
    //     }
    //     if(isPrime[i]){ // it will show like 2 is true so print it
    //         cout<<i<<" ";
    //     }
    // }
    // for (int i = 2; i <= n; i++) {

    //    bool isPrime = true;
    //    for (int j = 2; j*j <= i; j++){
    //         if(i%j==0){
    //                     isPrime = false;

    //                             break;
    //         }
    //    }
    // for (int j = i  ; j*j <= i ; j++) {
    //     if( == 0){
    //     }

    // }
    // if(isPrime)
    //     {
    //         cout<<i<<" ";
    //     }
    // }
    // string version1 = "1.3";
    // string version2 = "1.10";
    // float vf = stof(version1);
    // cout<<vf;
    // armstrom law
    // int n = 153;
    // int coudt = 0;
    // while (n!=0)
    // {
    //     int ns =  n%10;
    //     coudt+= (ns*ns*ns);
    //     n/= 10;
    // }
    // cout<<coud;
    // brute force of finding gcd

    // for (int i = 1; i <= min(a,b); i++) {
    //             if(a%i==0&&b%i==0){
    //                     gcd = i;
    //                 }
    //         }
    // cout<<gcd<<endl;
    // euclid law of gcd(a,b) a>b gcd(a-b,b) b>a gcd(a,b-a)
    //         while(a!=0&&b!=0){
    //             if(a>b){
    //                 a=a-b;
    //             }
    //             else
    //             {
    //                 b=b-a;
    //             }
    //         }
    //         if(a==0){
    //             gcd=b;
    //         }
    //         else{
    //             gcd = a;
    //         }
    // cout<<gcd;
    // optimize way of euclid algorithms a = 20 b = 8
    // if a > b so instead of gcd(20-8=12,8) gcd(12-8=4,8) repetedly minusing the be we can do gcd(20%8=4,8) gcd(4,8%4=0) gcd(4,0)
    // we will take the module of it
    // int lc = lcm(a,b);
    // int gc = gcd(a,b);
    int number = 3;
    int power = 3;
    int n = 1;
    while (power != 0)
    {
        if (power % 2 == 1)
        {
            number *= number;
        }
        n++;
        power /= 2;
    }
    cout << number;

    return 0;
}