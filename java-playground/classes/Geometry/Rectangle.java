package Geometry;

public class Rectangle {
  private Point topLeft;
  private Point bottomRight;

  public Rectangle(Point _topLeft, Point _bottomRight) {
    topLeft = new Point(_topLeft);
    bottomRight = new Point(_bottomRight);
  }

  public Rectangle(double topLeftX, double topLeftY, double bottomRightX, double bottomRightY) {
    topLeft = new Point(topLeftX, topLeftY);
    bottomRight = new Point(bottomRightX, bottomRightY);
  }

  public Rectangle(Rectangle rect) {
    topLeft = new Point(rect.topLeft);
    bottomRight = new Point(rect.bottomRight);
  }

  public Rectangle getEnclosingRect(Rectangle secondRect) {
    return new Rectangle(
      Math.min(topLeft.getX(), secondRect.topLeft.getX()),
      Math.max(topLeft.getY(), secondRect.topLeft.getY()),
      Math.max(bottomRight.getX(), secondRect.bottomRight.getX()),
      Math.min(bottomRight.getY(), secondRect.bottomRight.getY())
    );
  }

  public Point[] getDefiningPoints() {
    Point[] definingPoints = {
      this.getTopLeft(),
      this.getTopRight(),
      this.getBottomRight(),
      this.getBottomLeft()
    };
    return definingPoints;
  }

  public Point getTopLeft() {
    return new Point(topLeft);
  }

  public Point getBottomRight() {
    return new Point(bottomRight);
  }

  public Point getTopRight() {
    return new Point(bottomRight.getX(), topLeft.getY());
  }

  public Point getBottomLeft() {
    return new Point(topLeft.getX(), bottomRight.getY());
  }

  public String toString() {
    Point[] definingPoints = getDefiningPoints();
    String rectString = "[";
    for (int i = 0; i < definingPoints.length; i++) {
      rectString += definingPoints[i] ;
      if (i < definingPoints.length - 1) {
        rectString += ", ";
      }
    }
    rectString += "]";
    return rectString;
  }
}
