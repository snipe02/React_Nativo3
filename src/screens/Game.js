import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";


import styles from "../global/style";

export default function Game() {
    const navigation = useNavigation();
    const route = useRoute ();
    const { player, board } = route.params;
    const [gameBoard, setGameBoard] = useState(board);
    const [currentplayer, setCurrentPlayer] = useState(player);
    const [remainingMoves, setRemainingMoves] = useState(9);

    function play(row,column) {
        gameBoard[row][column] = currentplayer;
        setGameBoard([...gameBoard]);

        setCurrentPlayer(currentplayer === 'X' ? 'O' : 'X');
        checkWinner(gameBoard, row,column);
    }

    function checkWinner(gameBoard, row, column) {
        //Verificar linhas
        if(gameBoard[row][0] !== '' &&
           gameBoard[row][0] === gameBoard[row][1] &&
           gameBoard[row][1] === gameBoard[row][2]) {
            return finishGame(gameBoard[row][0]);
        }
         //   verifica colunas
        if (gameBoard[0][column] !== '' &&
            gameBoard[0][column] === gameBoard[1][column] &&
            gameBoard[1][column] === gameBoard[2][column]) {
            return finishGame(gameBoard[0][column]);
        }

        //verifica diagonal principal
        if (gameBoard[0][0] !== '' &&
            gameBoard[0][0] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][2]) {
            return finishGame(gameBoard[0][0]);
        }  

        //verifica diagonal secundaria
        if (gameBoard[0][2] !==  '' &&
            gameBoard[0][2] === gameBoard[1][1] &&
            gameBoard[1][1] === gameBoard[2][0]) {
            return finishGame(gameBoard[0][2]);
        }

            setRemainingMoves(remainingMoves - 1);
        }

        function finishGame(player) {
            navigation.navigate('winner', {win: player });
        }

        useEffect(()=> {
            // Deu velha
            if (remainingMoves === 0) {
                navigation.navigate('winner', { win: '-'});
            }
        }, [remainingMoves])


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.gameTitle}>Jogo da velha</Text>
            {  
                board.map((row, nRow) => {
                    return (
                        <View key={nRow} style={styles.inlineItems}>
                            { 
                                row.map((coluem, nColuem) => {
                                    return (
                                        <TouchableOpacity
                                            key={nColuem}
                                            style={styles.box}
                                            disabled={coluem !== ''}
                                            onPress={() => play(nRow,nColuem)}
                                        >
                                            <Text style={coluem !== 'X' ? styles.playerX : styles.playerO}>{coluem}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            
                        </View>    
                    )
                })
            }    
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('menu')} 
            >
                <Text style={styles.textMenuButton}>voltar ao menur</Text>
            

            </TouchableOpacity>
        </View>
    );
}

