let numbers = [4, 6, 8, 9, 7, 2];
{
    function findAverage(numbers){
        if (numbers.length === 0)
            return 0; // return 0 is the array is empty
        let sum = 0; // initialize sum
        //calculate the sum of numbers using loops
       for(i=0; i< numbers.length; i++){
           sum += numbers[i]; //add all the elements in te array
       }
       let average = sum / numbers.length; // find the average(sum divide by length of numbers)
   
       return average;
    }
   

}
console.log(findAverage(numbers))
