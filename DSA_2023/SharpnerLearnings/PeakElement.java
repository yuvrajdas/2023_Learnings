package SharpnerLearnings;
public class PeakElement{

    public static int findPeak(int arr[], int si, int ei){
        int mid = si+(ei-si)/2;

        if((mid == 0 || arr[mid]>arr[mid+1]) && (mid == ei-1 || arr[mid]>arr[mid-1])){
            return mid;
        }else if(mid>0 && arr[mid]<arr[mid-1]){
            return findPeak(arr, si, mid-1);
        }else{
            return findPeak(arr, mid+1, ei);
        }
    }
    public static void main(String[] args) {
        int arr[] =  {1,2,1,3,5,6,4};
        int res = findPeak(arr, 0, arr.length-1);
        System.out.println(res);
    }
}