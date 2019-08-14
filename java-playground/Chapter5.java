class Chapter5 {
  static int[] values =  new int[10];

  {
    System.out.println("Running initialization block...");
    for (int i = 0; i < values.length; i++) {
      values[i] = (int)(Math.random() * 100);
    }
  }

  void listValues() {
    System.out.println();
    for(int i : values) {
      System.out.print(i + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    Chapter5 chapter = new Chapter5();
    chapter.listValues();
    Chapter5 anotherChapter = new Chapter5();
    anotherChapter.listValues();
  }
}