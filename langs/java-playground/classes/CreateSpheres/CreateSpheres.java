import static java.lang.System.out;
class CreateSpheres {
  public static void main(String[] args) {
    out.println("count: " + Sphere.getCount());
    Sphere ball = new Sphere(4.0, 0.0, 0.0, 0.0);
    out.println("ball volume: " + ball.volume());
    out.println("count: " + Sphere.getCount());
    Sphere globe = new Sphere(12, 0, 0, 0);
    out.println("ball volume: " + globe.volume());
    out.println("count: " + Sphere.getCount());
  }
}