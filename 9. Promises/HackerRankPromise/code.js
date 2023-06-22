export const answers = [
    `#include <iostream>

    int solveMeFirst(int a, int b) {
        return a + b;
    }
    
    int main() {
        int num1, num2;
        std::cin >> num1 >> num2;
        int sum = solveMeFirst(num1, num2);
        std::cout << sum << std::endl;
        return 0;
    }`
    ,

    `#include <iostream>
    #include <vector>
    
    int simpleArraySum(const std::vector<int>& ar) {
        int sum = 0;
        for (int num : ar) {
            sum += num;
        }
        return sum;
    }
    
    int main() {
        int size;
        std::cin >> size;
    
        std::vector<int> array(size);
        for (int i = 0; i < size; i++) {
            std::cin >> array[i];
        }
    
        int result = simpleArraySum(array);
        std::cout << result << std::endl;
    
        return 0;
    }
    `,
    `#include <bits/stdc++.h>
    using namespace std;
    
    int main(){
        int numOfElems;
        cin >> numOfElems;

        vector<int> array(numOfElems);

        int sumOfArr = 0;

        for(int i=0; i<numOfElems; i++){
            cin >> array[i];
            sumOfArr += array[i];
        }

        cout << sumOfArr;
        return 0;
    }`
];

// export default answers;




// const answers = [
//     `#include <bits/stdc++.h>
//     using namespace std;
    
//     int main(){
//         int numOfElems;
//         cin >> numOfElems;

//         vector<int> array(numOfElems);

//         int sumOfArr = 0;

//         for(int i=0; i<numOfElems; i++){
//             cin >> array[i];
//             sumOfArr += array[i];
//         }

//         cout << sumOfArr;
//         return 0;
//     }`
// ];

// export default answers;


// `#include <bits/stdc++.h>
//     using namespace std;
    
//     int main(){
//         int numOfElems;
//         cin >> numOfElems

//         vector <int> array(numOfElems);
        
//         int SumOfArr = 0;

//         for(int i=0; i<numOfElems; i++){
//             cin >> array[i];
//         }

//         cout << sumOfArr;
//         return 0;
//     }`