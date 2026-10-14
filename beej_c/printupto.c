#include <stdio.h>

int main(void) {
	int num, i;

	while (1) {
		printf(">> ");
		scanf("%d", &num);

		if (num <= 0) {
			break;
		}

		printf("1");
		for (i = 2; i < num; i++) {
			printf(", %d", i);
		}
		printf("\n");
	}
	return 0;
}
