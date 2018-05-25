#include <stdio.h>

int main(void) {
	int num, result = 0, i;
	scanf("%d", &num);

	for(i = 0; i <=num; i++) {
		result += i;
	}

	printf("%d\n", result);
	return 0;
}
