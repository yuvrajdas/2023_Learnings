public class __1Constructor{

    // Non-Parameterized Constructor
    public __1Constructor(){

    }

    // Parameterized Constructor
    public __1Constructor(int val){
        System.err.println(val);
    }
    public static void main(String[] args) {
        /*
         * => Constructor is similer to the method, but the condition is the class name and the method name should be same then it is known and constructor.
         * 1. Constructor have no return type not even void.
         * 2. Constructor can have a modifiers Public, Private, Protected and Default.
         * 3. Constructor gets executed automatically when the object is created. it do not need to call.
         * 4. It is used to initialize the instance of the class.
         * 
         * Type of Constructor
         * 1. Default Constructor/Non-Parameterized Constructor : When we do not create constructor the compiler automatically create a constructor that is known as default Constructor.
         * 2. Parameterized Constructor : When we create a constructor mannualy and pases the value to it known as Parameterized Constructor.
         * 3. Non-Parameterized Constructor : When we create a constructor mannualy and do not pass any value to it known as Non-Parameterized Constructor.
         */

         __1Constructor npcObj = new __1Constructor();
         __1Constructor pcObj = new __1Constructor(1);

         System.out.print(npcObj+"\n");
         System.out.print(pcObj);
    }
}