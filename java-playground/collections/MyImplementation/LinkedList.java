package MyImplementation;

public class LinkedList<T> {
  protected class ListItem {
    T item;
    ListItem next;
    ListItem prev;
    public ListItem(T item) {
      this.item = item;
      next = prev = null;
    }
    public T getItem() {
      return item;
    }
    public void setNext(ListItem next) {
      this.next = next;
    }
    public void setPrev(ListItem prev) {
      this.prev = prev;
    }
  }
  protected ListItem first;
  protected ListItem last;
  protected ListItem current;

  public LinkedList() {
    first = last = current = null;
  }

  public LinkedList(T item) {
    addItem(item);
  }

  public LinkedList(T[] items) {
    for (T item: items) {
      addItem(item);
    }
  }

  public void addItem(T item) {
    ListItem newListItem = new ListItem(item);
    if (first == null) {
      first = last = current = newListItem;
    } else {
      newListItem.setPrev(last);
      last.setNext(newListItem);
      last = newListItem;
    }
  }

  public T getFirst() {
    current = first;
    if (current != null) {
      return current.getItem();
    }
    return null;
  }

  public T getNext() {
    if (current != null) {
      current = current.next;
      if (current != null) {
        return current.getItem();
      }
    }
    return null;
  }
}
