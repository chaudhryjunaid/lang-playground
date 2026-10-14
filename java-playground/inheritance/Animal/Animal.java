package Animal;

public abstract class Animal {
  private String type = "Animal";
  Animal(String aType) {
    type = aType;
  }
  public String toString() {
    return type;
  }
  public abstract String sound();
}
