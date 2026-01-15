#include <iostream>
#include <algorithm>
#include <vector>
#include <list>
#include <deque>
#include <stack>
#include <map>
#include <queue>
#include <set>
#include <unordered_map>
using namespace std;
bool Compariter(pair<int, int> a, pair<int, int> b);
/*
       ||||||||||||||||||||||||||||2||0||2||5||||T||U||E|||A||U||G||||||||||||||||||||||||||||||||||||||||||||||||||
       |||||||*FAZI*||||||||||||M|||||A|||||M|||||O||||O|||N||||||R||E||P|O|-|||-|S||T||L||||||||||||||||||||||||||||
       |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
       (vector) -> is the stl template libray contaner use as the dynamic array so that we can change it size and capacity at run time
       (push_back) --> to add the value like pb(1) --> {1} pb(2) --> {1,2}
       (pop_back)  --> it will remove the last element of the vector also it will not effect the capacity only the size or remove only the value not the capacity of the vector
       (size)      --> is the value a vector fill now like {1,2,3,4} s = 4
       (capasity)  --> is the value we can fit in or how many we can fit in every time when the capacity become full and we add other value
           {1,2} --> size = 2 capacity = 2 now we add pb(3) | {1,2,3} --> size = 3 capacity = 4 if it is full like {1,2,3,4} and now we add
           pb(5) --> size = 5 capacity = 8 so every time the capacity become double or multiply with two
       (at|[])     --> it is use to go on specific index on the vector like {1,2,3} --> arr.at(1) = 2 | arr[1] = 2
       (front)     --> will show the first value of the vector {11,22,33} => 11
       (back)      --> will show the last  value of the vector {11,22,33} => 33
       (vec(size,value)) --> like {vector <int> arr(size,value)} == so the size is that how many size/capacity  value = is that what value we will insert on each idx
           or like arr(2,2) --> {2,2} arr(4size,4the value to insert on each idx) --> {4,4,4,4}  4 S/4 C so the it will iterate the value in all the vector
       (begin)   --> will give the first element memory location like a pointer cout<<*(arr.begin())<<endl;
       (end)     --> will give the last element memory location like a p in startin teh arr.end() is not pointing the last value it point arr.end()+1   cout<<*(arr.end()-1);
       (erase)   --> it is use to erase the element in the vecotr erase(arr.begin()) it erase the first value from the array
           but if we want to remove the 2nd index value simple erase(arr.begin()+2) we can also delete multiple value from aray
           erase(start,end) start is included and end is not like end - 1 arr.erase(arr.begin()+1,arr.begin+3)
           can change the size but not the capacity
       (insert) --> will insert the value it specific index can change the capasity and size arr.insert(arr.begin()+2,100);
       (clear)  --> will clear all the vector can change size only
       (empty)  --> will check if the vector is empty or not
       (iterator) --> it is use for the vector to iterater through the vector like we use the arr.begin() which point to the starting index pointer and end which is the end+1
                      vector <int>::iterator it;
       (reverse_iterator)  --> vector <int>::reverse_iterator it; is use for reverseing vector
       (rbegin)   --> is the last element index {1,2,3,4} = 4
       (rend)     --> is the garbge value {rend{1,2,3,4}end} that why we use end - 1
       |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
       (list)     --> it is dously linked array like we can add the element in the front/back also can remove the element from the front and back
                      list   <int> arrl = {1,2,3,4}; so it mean we will have the front function for at as will as start
                      also it is not allow random accec in array
       |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
       (deque)    --> is known as double ended que is as like list can form functoin for front and back it is allow random acces d[2]
       {{{{
           we can also use this methood
           vector <int>::reverse_iterator it;
           for (vector <int>::reverse_iterator it = arr.rbegin();it!=arr.rend(); it++)
           for (vector <int>::iterator it = arr.begin;it!=arr.end();it++)
           but modern c++ automaticaly understand what are we asseging the variable so
           for (auto it = arr.rbegin();it!=arr.rend(); it++)
           for (auto it = arr.begin() ;it!=arr.end() ; it++)
       }}}}
       |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
       (pair)  --> is use for to stor the pair or double values in can be char or integers
           pair  p = {1,'a'};                         normal
           pair<int,int> p = {1,2};                   normal wiht insealizer
           pair <int,pair<int,int>> p = {1,{2,3}};    need insealizer
           vector<pair<int,int>> vp = {{1,2},{3,4}};  pair in vector vector<pair<int,int>> vectorpair;
           *******************************************************
           loop to iterater through pair
           for(pair<int,int> p:vp){
               cout<<p.first<<" "<<p.second<<endl; to show the pair first and secound value
           }
           *******************************************************
           for (int i = 0; i < 3; i++) {
               cout<<vp[i].first<<" "<<vp[i].second; to show the pair first and secound value
               cout<<endl;
           }
           *******************************************************
               vp.push_back({4,4}); // it will acceume that we will first make the pair then it will push back it in the vector
               vp.emplace_back(5,5);// it will in-place the object or automaticaly create the pair and then push it in the back of vector

           |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
           non sequancial container
           *stack* lifo last in fist outf
           it store the value in the stack form it add the value in the last and first remove the last value
           (top) --> it is use to show the top value of the stack or last in
           (swap) --> it will swap the value with each other
               stack<int> p;
               stack pd;
               p.push(1); ===  | 3 | --> last in and first out
               p.push(2); ===  | 2 |
               p.push(3); ===  | 1 |
                               -----

                   """""""""""""""WILL show the value of the stack container"""""""""""""""""""

                                               while (!s.empty())
                                               {
                                                   cout<<" | "<<s.top()<<" | ";
                                                   s.pop();
                                                   cout<<endl;
                                               }
                                               cout<<"--------";
               |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
               *queue fifo first in first out
                    queue<int> q;
                       q.push(1); ==   -------------
                       q.push(2); ==   | 1 | 2 | 3 | it will add the vlue like {1} - {1,2} - {1,2,3} and remove {1,2,3} - {2,3} - {3}
                       q.push(3); ==   -------------
                       queue<int> q2;
                       q2.push(11); == ----------------
                       q2.push(22); == | 11 | 22 | 33 |  swap it q = {11,22,33} q2 = {1,2,3}
                       q2.push(33); == ----------------
                       q.swap(q2);


                       while(!q.empty()){
                           cout<<q.front();
                           q.pop();
                       }
                       |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                              ^
                       priority queue largest |
                           priority_queue<int> pq;                          --> it is the default one which use maxheap largest first in tree struct
                           priority_queue<int,vector<int>,greater<int>> pq; --> it will reverse the order from max heap minheap like lower first in tree struct
                           pq.push(5);    //   | 10 | it use the max heap property so the greatest will always on
                           pq.push(10);   //   | 5  | the top of the stack or array and the lowest will always on
                           pq.push(4);    //   | 4  | the bottom also it like a tree structure    /\
                           pq.push(3);    //   | 3  |                                            //\\
                           while(!pq.empty()){
                                   cout<<pq.top();  top will show the value it the top or most priority value
                                   pq.pop();        it will delete the last value which wil be the largest of the stack
                               }
                       ||||||||||||||||||||||||||||||||||||||||||||||||sorted||||||uniqe|||||||||||||||||||||||||||||||||||||||||||||||||||||||
                       map<string,int> m;
                       m["akbare hussain"] = 426 ; | it store the value in key value pair
                       m["mamoon"]         = 436 ; | it store it in sort ascending order or lexicographcally form
                       m["saim"]           = 359 ; | map<key,value>
                       m["rayan"]          = 230 ; |
                       m["mamoon"]                 | we can use this methood to show the value by it key
                       m.emplace("haroon",55);  O(logn)    | it will add the new key value pair
                       m.insert({"hzroon",56}); O(logn)
                       m.erase("amin")   O(logn)   | it will delete the value with the key
                       pair<string,int> p = {"mamoon",m["mamoon"]};  | it will store the value in the pair --> {"mamoon",436}
                       for(pair<string,int> it:m)    | we can itrerate through the for each loop
                       {
                           cout<<it.first<<" "<<it.second <<endl;
                       }
                       for(map<string,int>::iterator it=m.begin();it!=m.end();it++ ){  | we can also use the iterator to show the value in the key value form
                           cout<<it->first<<" "<<it->second<<endl;
                       }
                       |||||||||||||||||||||||||||||||||||||||||||||||||||||sorted|||||||notuniqe|||||||||||||||||||||||||||||||||||||||||||||||||
                       multi map it is like a map but we can make a duplicate value also store in sorted form
                           multimap<string,int> m;

                       m.emplace("haroon",55);  | sort the data in ascending order lexographically O(logn)
                       m.emplace("haroon",55);  | can make a duplicate a multi duplicate  O(logn)
                       m.emplace("haroon",55);  | can't use the the m.["key"] = value instead we use  O(logn)
                       m.emplace("haroon",55);  | m.emplace(key,value) or m.insert({key,value})  O(logn)
                       m.insert({"hzroon",56}); |   O(logn)
                       m.erase("haroon");       | if we use the erase it will find the key at that name it will delete it all O(logn)
                       m.erase(m.find("haroon"))| but when we use the find iterator it will give the specific memory address of the key and only delete one
                       for(pair<string,int> p:m){
                           cout<<p.first<<" "<<p.second<<endl;
                       }
                       cout<<m.count("amin")<<endl;
                       for(multimap<string,int>::iterator mi=m.begin(); mi!=m.end();mi++){
                           cout<<mi->first<<" "<<mi->second<<endl;
                       }
                       ||||||||||||||||||||||||||||||||||||||||||||random||||||unique|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                       unordered_map<string,int> m; | it store the value or the data in random order
                       m["z"] = 55;
                       m.insert({"a",56}); O(1)
                       m.emplace("d",55);  O(1)
                       m.emplace("s",55);  O(1)
                       m.emplace("g",5);   O(1)
                       m.emplace("b",55);  O(1)
                       for(pair<string,int> p:m){
                           cout<<p.first<<" "<<p.second<<endl;
                       }
                       for(unordered_map<string,int>::iterator mi=m.begin(); mi!=m.end();mi++){
                           cout<<mi->first<<" "<<mi->second<<endl;
                       }
                   ||||||||||||||||||||||||||||||SET|||||||||||||||||||||||||||UNIQUE|||||||||||||||||||||||||||||||||||||
                   set<int> s;
                   s.insert(1);  O(logn)
                   s.insert(2);            tree like structure like map
                   s.insert(3);                /\
                   s.insert(4);               //\\
                   s.insert(5);              ///\\\
                   s.insert(6);             ////\\\\
                   s.insert(4);            /////\\\\\
                   for(int p:s){          //////\\\\\\
                       cout<<p;
                   }
               *(lower_bound(key))  --> data will equal to the key or greater
               *(upper_bound(key))  --> data will greater then the key not equal
           ||||||||||||||ALGORITHMS|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
           sort(arr,arr+n) --> arr is the arr pointer and arr+n is the end point {{1start,2,3,4}endpoint}
           sort(arr,arr+5,greater<int>());  -> sort in decending or decreasing order
           sort(arr.begin(),arr.end()) --> for vector
           sort(arr.begin(),arr.end(),greater<int>()) --> reverse vector
           makeing the pair sorted
           in this code we are first makeing the inside pair value in accending order or sort then we are compairing the the pair.first with all and sorting it
           vector<pair<int,int>> arr = {{2,1},{3,-1},{5,3},{1,2},{8,3}};
           for(vector<pair<int,int>>::iterator it = arr.begin();it!=arr.end();it++){
               if(it->first>it->second){
                   swap(it->second,it->first);
               }
           }
           ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
           we can also make the custom compariter function to sort the pair in the vector
           bool Compariter(pair<int,int> a, pair<int,int> b){
               if(a.second < b.second){
                   return true;  }
                   else return false;  // it will sort the pair in accending order of the second value

            sort(arr.begin(),arr.end(),Compariter);

*/

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    for (vector<int>::iterator it = arr.begin(); it != arr.end(), it++)
    {
        cout << it;
    }
    return 0;
}