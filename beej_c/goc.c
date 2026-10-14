#include <stdio.h>

struct creature {
	char *name;
	float x;
	float y;
};

void init_creatures(struct creature creatures[], int count);
void update_creatures(struct creature creatures[], int count);
void print_creatures(struct creature creatures[], int count);

int main(void) {
	printf("Welcome to the Game of Creatures!\n\n");
	printf("Instructions: Press enter key to see the characters move, press any other followed by enter to exit.");

	int NUM_CREATURES = 5;
	struct creature creatures[NUM_CREATURES];

	init_creatures(creatures, NUM_CREATURES);
	while(getchar() == '\n') {
		update_creatures(creatures, NUM_CREATURES);
		print_creatures(creatures, NUM_CREATURES);
	}

	return 0;
}

void init_creatures(struct creature creatures[], int count) {
	char *creature_names[] = {"Cat", "Dog", "Mouse"};
	int i;
	for (i = 0; i < count; i++) {
		creatures[i].name = creature_names[0];
		creatures[i].x = 0.0;
		creatures[i].y = 0.0;
	}
}
void update_creatures(struct creature creatures[], int count) {
	int i;
	for (i = 0; i < count; i++) {
		creatures[i].x += 1.2;
		creatures[i].y += 0.8;
	}
}

void print_creatures(struct creature creatures[], int count) {
	int i;
	for (i = 0; i < count; i++) {
		printf("[Creature %d] %s is now at: (%.1f, %.1f)\n", i, creatures[i].name, creatures[i].x, creatures[i].y);
	}
}
