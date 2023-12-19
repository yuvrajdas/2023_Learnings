package SharpnerLearnings;

public class SearchInSortedRotatedArray {

    public static int search(int arr[], int target){
        int si =0;
        int ei = arr.length-1;

        while(si<=ei){
            int mid = si+(ei-si)/2;

            if(arr[mid] == target){ // if the target element found in mid
                return mid;
            }else if(arr[si]<=arr[mid]) {  // Check for the left part form staring index to mid is sorted

                if(target>=arr[si] && target<arr[mid]) { // check for the lement lies in the left sorted part 
                    ei = mid-1;
                }else{
                    si = mid+1;
                }
            }else if(arr[mid]<=arr[ei]){ // check for the element lies in right part mid to ei
                if(target>arr[mid] && target<=arr[ei]){
                    si = mid+1;
                }else{
                    ei = mid-1;
                }
            }
        }
        return -1;
    }
    public static void main(String[] args) {      
        int arr[] = {4,5,6,7,8,9,1,2,3};
        int target = 3;
        int res = search(arr, target);
        System.out.println(res);
    }
}
