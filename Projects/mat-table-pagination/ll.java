public class ll{

    public static class Node{
        int data;
        Node next;
    }

    public static class LinkedList{
        int size;
        Node head;
        Node tail;

        public void addLast(int val){
            Node newNode = new Node();
            newNode.data  = val;
            newNode.next = null;
            if(size == 0){
                head = tail = newNode;
            }else{
                tail.next = newNode;
                tail      = newNode;
            }
            size++;
        }

        public void addFirst(int val){
            if(size == 0){
                Node nenwNode = new Node();
                nenwNode.data = val;
                nenwNode.next = null;
                head = tail = nenwNode;
                size++;
            }else{
                Node newnoNode = new Node();
            }
        }

        public void printList(){
            Node temp = head;
            while(temp!=null){
                System.out.print(temp.data+"->"); 
                temp = temp.next;
            }
            System.out.print("null");
        }
    }
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.addLast(1);       
        ll.addLast(2);       
        ll.addLast(3);       
        ll.addLast(4);       
        ll.addLast(5);
        ll.printList();       
    }
}