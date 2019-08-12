class Enums {
  enum Day { mon, tue, wed, thu, fri, sat, sun }
  public static void main(String[] args) {
    Day yesterday = Day.mon;
    Day today = Day.tue;
    Day tomorrow = Day.wed;

    System.out.println(yesterday + " " + today + " " + tomorrow);
  }
}
