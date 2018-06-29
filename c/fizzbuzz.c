#include <stdio.h>
#include <string.h>

int main(void) {
	char s[10] = "";
	for(int i = 1; i <= 100; i++) {
		strncpy(s, "", 1);
		if (i % 3 == 0) {
			strncat(s, "Fizz", 10);
		}
		if (i % 5 == 0) {
			strncat(s, "Buzz", 10);
		}
		if (!strcmp(s, "")) {
			snprintf(s, 10, "%d", i);
		}
		if( ( (i - 1) % 10) == 0) {
			printf("\n");
		} else if (i > 1) {
			printf(" ");
		}
		printf("%s", s);
	}
}
