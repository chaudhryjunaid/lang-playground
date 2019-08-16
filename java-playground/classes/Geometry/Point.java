package Geometry;

import static java.lang.Math.sqrt;

public class Point {
  private double x = 0;
  private double y = 0;

  public Point(double x, double y) {
    this.x = x;
    this.y = y;
  }

  public Point(final Point p) {
    x = p.x;
    y = p.y;
  }

  public double distance(final Point p) {
    return sqrt((x - p.x)*(x - p.x) + (y - p.y)*(y - p.y));
  }

  public String toString() {
    return "(" + x + "," + y + ")";
  }

  public double getX() {
    return x;
  }

  public double getY() {
    return y;
  }
}