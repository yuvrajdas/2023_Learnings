class Animal{

    String color;

    Animal(String color){
        this.color = color;
    }

    protected void canBark(){
        System.out.println("Yes"+" "+color);
    }
}

class Dog extends Animal{

    Dog(String color){
        super(color);
    }

    public void bark() {
        canBark();  
        System.out.println(color);;
    }
}

public class __2Iheritance {

    public static void main(String[] args) {
        Dog obj = new Dog("Black");
        obj.bark();
    }
}