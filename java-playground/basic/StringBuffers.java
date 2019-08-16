class StringBuffers {
  public static void main(String[] args) {
    StringBuffer aStringBuffer = new StringBuffer();
    aStringBuffer.append("Hello, StringBuffers!");
    aStringBuffer.replace(0, 5, "Bonjour");
    aStringBuffer.insert(7, " and Hello");
    System.out.println(aStringBuffer);
    System.out.println("capacity: " + aStringBuffer.capacity());
    System.out.println("length: " + aStringBuffer.length());
    char[] aCharArray = { 'a', 'b', 'c' };
    StringBuffer bStringBuffer = new StringBuffer().append(aCharArray);
    System.out.println(bStringBuffer);
    bStringBuffer.setLength(100);
    bStringBuffer.ensureCapacity(200);
    System.out.println(bStringBuffer.length());
    System.out.println(bStringBuffer.capacity());
  }
}