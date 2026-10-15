#include <stdio.h>
#include <stdlib.h>

int main(void) {
	const int INIT_BUF_SIZE = 10;
	int bufSize = INIT_BUF_SIZE;
	int length = 0;
	char *s = malloc(bufSize);
	char ch = '\0';

	while(1) {
		ch = getchar();
		length++;
		if (length > bufSize) {
			printf("*");
			s = realloc(s, bufSize + 10);
			bufSize += 10;
		}
		if (ch == '\r' || ch == '\n') {
			break;
		}
		s[length-1] = ch;
	}
	s[length-1] = '\0';


	char swap = '\0';
	for (int i = 0; i < length / 2; i++) {
		swap = s[length - i - 2];
		s[length - i - 2] = s[i];
		s[i] = swap;
	}

	printf("\n\nThe reversed string is: %s\n", s);
	return 0;
}
