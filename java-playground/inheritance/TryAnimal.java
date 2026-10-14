import Animal.*;

class TryAnimal {
  public static void main(String[] args) {
    Dog spaniel = new Dog("Fido", "Spaniel");
    Cat persian = new Cat("Nilofer", "Persian");
    Animal anAnimal = spaniel;
    System.out.println(anAnimal);
    System.out.println(anAnimal.sound());
    anAnimal = persian;
    System.out.println(anAnimal);
    System.out.println(anAnimal.sound());
  }
}