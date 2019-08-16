class Sphere {
  static double PI = 3.14;
  static int count = 0;

  double radius = 0;
  double xCoord = 0;
  double yCoord = 0;
  double zCoord = 0;

  Sphere(double radius, double x, double y, double z) {
    this.radius = radius;
    xCoord = x;
    yCoord = y;
    zCoord = z;
    ++count;
  }

  static int getCount() {
    return count;
  }

  double volume() {
    return PI * radius * radius * radius;
  }
}
