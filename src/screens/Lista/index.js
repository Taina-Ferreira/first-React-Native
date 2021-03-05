import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import Fundo from '../../../assets/fundo.jpg';
import styles from './styles';

const lista = [
    {
        nome: "Ada Lovelace",
        trabalho: "Ainda jovem, Ada conheceu o matemático Charles Babbage, por quem teve grande admiração. Fascinada pelas ideias do notável inventor, contribuiu com seus trabalhos de desenvolvimento da máquina analítica. Tratava-se de um projeto de aparelho mecânico destinado a fazer cálculos complexos — uma espécie de computador movido a vapor."

    },
    {
        nome: "Grace Hopper",
        trabalho:"Hopper foi uma das grandes responsáveis por popularizar linguagens de programação que utilizavam palavras mais próximas da humana, sendo de alto nível (e não de máquina). Assim, seu trabalho influenciou a construção de linguagens mais simples, como foi o caso do COBOL (Common Business Oriented Language)."
    },
    {
        nome: "Alan Turing",
        trabalho:"Turing formalizou diversos conceitos computacionais e vislumbrou o potencial de um computador em executar qualquer conjunto de passos lógicos que conseguisse interpretar. Ele foi além e propôs que, um dia, as máquinas evoluiriam a ponto de se tornarem inteligentes."
    },
    {
        nome: "Margaret Hamilton",
        trabalho: "Mais uma cientista da computação na nossa lista, a americana Margaret Hamilton foi diretora da divisão de engenharia de software para a produção do código do sistema de orientação de voo do programa espacial Apollo (Apollo Guide Computer), da NASA."
    }
]

function Lista() {
    return (
        <ScrollView style={styles.caixa}>
                <ImageBackground source={Fundo} style={styles.fundo}>
                <Text style={styles.titulo}>Programadores de sucesso!</Text>
                    <View style={styles.fundo}>
                        <View style={styles.cardlist}>
                            {
                                lista.map((lista, index) =>
                                    <Text style={styles.lista} key={index}>{lista.nome}{"\n"} História: {lista.trabalho}</Text>
                                )
                            }
                        </View>
                    </View>
                </ImageBackground>
            
        </ScrollView>
    )
}

export default Lista;
