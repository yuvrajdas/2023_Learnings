class Parent{

        public void overFunction(int i){
            System.out.println("Overriding function parent");
        }
}
public class __3Polymorphism extends Parent{
    
    public String show(){ // Method overloading
       return "Show";
    }
    
    public void overFunction(int i){
        System.out.println("Overriding function child");
    }

    public void show(String str){ // Method overloading
        System.out.println(str);
    }

    public static void main(String[] args) {
        /**
         * Polymorphism : Different form of the data, It can be achieve by using 
         * 1. Method Overloading
         * 2. Method overriding
         * 
         * Method Overloading conditions 
         *  1. Method name should be same
         *  2. Class name should be same
         *  3. Argument should be different
         * 
         * Method Overriding Conditions (For Method overriding Inheritance should be there)
         *  1. Method name should be same
         *  2. Class name should be different
         *  3. Arguments should be same. 
         * */    
         __3Polymorphism p = new __3Polymorphism();
         p.show("Hello Argument");
         p.overFunction(1); // Method will be called based on Parent Or child Object creation. if parent object then parent method will be called and so on.
         String res = p.show();
         System.out.println(res);
    }   
}

// em ledu, nothing
// em ledu, nothing
