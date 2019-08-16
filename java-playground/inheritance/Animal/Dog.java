package Animal;

public class Dog extends Animal {
  private String name;
  private String breed;

  public Dog(String aBreed) {
    super("Dog");
    breed = aBreed;
  }

  public Dog(String aName, String aBreed) {
    this(aBreed);
    name = aName;
  }

  public String toString() {
    return "a " + super.toString() + (name != null ? " called " + name : "") + (breed != null ? " of breed " + breed : "");
  }

  public String sound() {
    return "Woof, woof!";
  }
}
