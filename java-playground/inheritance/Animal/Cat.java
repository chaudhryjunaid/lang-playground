package Animal;

public class Cat extends Animal{
  private String name;
  private String breed;

  public Cat(String aBreed) {
    super("Cat");
    breed = aBreed;
  }

  public Cat(String aName, String aBreed) {
    this(aBreed);
    name = aName;
  }

  public String toString() {
    return "a " + (breed != null ? breed + " ": "") + super.toString() + (name != null ? " called " + name : "");
  }

  public String sound() {
    return "Miaaow!";
  }
}
