#include <iostream>
#include <vector>
using namespace std;
const int SIZE = 3;
void display(char board[][SIZE])
{
    for (int i = 0; i < SIZE; i++)
    {
        cout << "|" << " ";
        for (int j = 0; j < SIZE; j++)
        {
            cout << " " << board[i][j] << " " << "|";
        }
        cout << "\n";
    }
    // function body
}
bool checkwin(char board[][SIZE], char player)
{
    // it is for row one
    for (int i = 0; i < SIZE; i++)
    {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player || board[0][i] == player && board[1][i] == player && board[2][i] == player)
        {
            return true;
        }
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player || board[0][2] == player && board[1][1] == player && board[2][0] == player)
    {
        return true;
    }
    return false;
}
bool checkboard(char board[SIZE][SIZE])
{
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            if (board[i][j] == ' ')
            {
                return false;
            }
        }
    }
    return true;
}
void playgame(char playeres)
{
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}};
    char currentPlayer = 'X';
    bool game_over = false;
    while (!game_over)
    {

        display(board);
        cout << "enter the value ";
        int input;
        cin >> input;
        int col = input % 10;
        int row = input / 10;
        if (row >= 0 && row < SIZE && col >= 0 && col < SIZE && board[row][col] == ' ')
        {
            board[row][col] = currentPlayer;

            if (checkwin(board, currentPlayer))
            {
                display(board);
                cout << "you win the game " << currentPlayer << endl;
                break;
            }
            if (checkboard(board))
            {
                display(board);
                cout << "the match is draw please try again " << endl;
                break;
            }
            currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
        }
        else
        {
            cout << "invalid input please try again" << endl;
        }
    }
}
int main()
{
    char playersss = 'X';
    playgame(playersss);

    return 0;
}
