#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
  char *start = "0", *stop = "200", *step = "20";
  if (argc >= 4) {
    step  = argv[3];
  }
  if (argc >= 3) {
    stop = argv[2];
  }
  if (argc >= 2) {
    start = argv[1];
  }

  int startNum = atoi(start);
  int stopNum = atoi(stop);
  int stepNum = atoi(step);

  for (int i = startNum; i <= stopNum; i += stepNum) {
    printf("%d\t%d\n", i, 5*(i-32)/9);
  }
  return 0;
}
