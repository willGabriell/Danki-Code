#include <stdio.h>
#include <string.h>

int main() {

  char player[256]
  char player2[256]

  printf("Player 1, sua vez... \n");
  scanf("%s", &player);
    
  printf("Player 2, sua vez... \n");
  scanf("%s", &player2);
    
  printf("\nResultado:\n");
    
    if (strcmp(player, "papel") == 0) {
        
            if (strcmp(player2, "papel") == 0) {
                printf("Empate");
            } else if(strcmp(player2, "pedra") == 0) {
                printf("Player 1 venceu");
            } else if(strcmp(player2, "tesoura") == 0) {
                printf("Player 2 Venceu");
            } else {
                 printf("informação incorreta");
             }
        
    } else if(strcmp(player, "pedra") == 0) {
        
            if (strcmp(player2, "papel") == 0) {
                printf("Player 2 venceu");
            } else if(strcmp(player2, "pedra") == 0) {
                printf("Empate");
            } else if(strcmp(player2, "tesoura") == 0) {
                printf("Player 1 Venceu");
            } else {
                 printf("informação incorreta");
             }
        
    } else if(strcmp(player, "tesoura") == 0) {
        
            if (strcmp(player2, "papel") == 0) {
                printf("Player 1 venceu");
            } else if(strcmp(player2, "pedra") == 0) {
                printf("Player 2 Venceu");
            } else if(strcmp(player2, "tesoura") == 0) {
                printf("Empate");
            } else {
                 printf("informação incorreta");
             }
        
    } else {
        printf("informação incorreta");
    }
  
}
