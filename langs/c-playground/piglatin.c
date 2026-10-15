#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char *get_string() {
	int length = 0;
	int bufSize = 100;
	char ch = '\0';

	char *s = malloc(sizeof(char) * bufSize);

	while(1) {
		ch = getchar();
		length++;
		if (length > bufSize) {
			s = realloc(s, sizeof(char) * bufSize * 2);
			bufSize *= 2;
		}
		if (ch == '\n') {
			break;
		}
		s[length-1] = ch;
	}
	s[length-1] = '\0';
	return s;
}

char **split_string(char *s, split)
int main(void) {
	char *s = get_string();
	printf("The string was: %s\n", s);
	return 0;
}
