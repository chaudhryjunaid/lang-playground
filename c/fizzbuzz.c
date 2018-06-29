#include <stdio.h>
#include <string.h>

int main(void) {
	int bufSize = 10;
	char s[bufSize] = "";
	for(int i = 1; i <= 100; i++) {
		strncpy(s, "", bufSize);
		if (i % 3 == 0) {
			strncat(s, "Fizz", bufSize);
		}
		if (i % 5 == 0) {
			strncat(s, "Buzz", bufSize);
		}
		if (!strcmp(s, "")) {
			snprintf(s, bufSize, "%d", i);
		}
		if( ( (i - 1) % 10) == 0) {
			printf("\n");
		} else if (i > 1) {
			printf(" ");
		}
		printf("%s", s);
	}
}
