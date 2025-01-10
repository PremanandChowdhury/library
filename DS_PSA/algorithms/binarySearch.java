package algorithms;
// Recursive method for Binary Search
class BinarySearch {

  int binarySearch(int arr[], int init, int sno, int arrlen) {
    
    if (init <= arrlen - 1) {
      // Calculate the mid index
      int mid = (arrlen - 1) / 2;
      // if the sno is == arr[mid], return found
      if (arr[mid] == sno)
        return mid;
    
      // if the sno is > arr[mid], call the function recursively with start as mid and till arrlen
      if (arr[mid] < sno)
        return binarySearch(arr, mid + 1, sno, arrlen);
      
      // if the sno is < arr[mid], call the function recursively with the start as 0 and end with mid
      if (arr[mid] > sno)
        return binarySearch(arr, 1, sno, mid - 1);
    }
    
    // When the element is not present in the array
    return -1;
  }



  public static void main(String args[]) {
    // Creating an object
    BinarySearch ob = new BinarySearch();

    // Creating an array and parameters needed
    int arr[] = { 2, 4, 6, 8, 10, 12, 14 };
    int len = arr.length;
    int searchNo = 12;

    // Calling the BinarySearch Function
    int result = ob.binarySearch(arr, 0, searchNo, len);
    
    // Checking if the search no. is present or not
    if (result == -1) {
      System.out.println("Searched element is not present");
    } else {
      System.out.println("Searched element found at index " + result);
    }
  }
}