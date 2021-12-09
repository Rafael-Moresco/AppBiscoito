import React, { Component } from "react";
import { View, StyleSheet, Button,TouchableOpacity, Text,Image  } from "react-native";

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state={};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor: props.color,
        backgroundColor:'transparent',
        borderRadius:25
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoText:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress} >
        <View style={this.styles.botaoArea} >
          <Text style={this.styles.botaoText} >{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

export default class AppBiscoito extends Component {

  constructor(props) {
    super(props);
    this.state={texto:''};

    this.frases = [
      'Seja feliz. A base de remédios','Potencial. Nem todo mundo será Astronauta quando crescer!','Esforço. Plágio economiza tempo!','Vocês que pensam que sabem tudo, se incomodem conosco que sabemos','A inteligência artificial não é páreo para a estupidez natural!','Faça um bom uso do objeto cilíndrico que você deve ter, sob a sua mesa!','Saboreie os momentos sob os holofotes. Eles não irão durar muito!','e você não conseguir de primeira, remova todas as evidências de que você ao menos tentou!','A Inabilidade de um Time, tem um impacto muito maior que a soma das inabilidades individuais de seus componentes!','Fujões nunca vencem. Vencedores nunca fogem. Mas aqueles que nunca vencem e continuam sem fugir são idiotas!','Quando o que está por vir é duro, o durão pede um café!','Finalmente ela olhou pra você. E te achou feio.','Aquela festa parece legal… Ninguém te convidou.','Uma mulher te cantou…era um travesti.','Sexta feira! O melhor dia para invejar pessoas felizes…','Se você vai se atrasar, então se atrase de verdade. Não dois minutinhos. Atrase-se uma hora e saboreie seu café da manhã!','Sonhos são como arco-íris. Somente os bobos correm atrás deles!', 'Uma jornada de milhares de quilômetros, as vezes termina mal. Muito mal!','Realizando o impossível” significa apenas a demanda que seu chefe irá adicionar as suas atividades regulares.','Sua cara metade virou gay!',' Faça um elogio. Não receba outro em troca.','Ela disse que te ama. “Desculpe, janela errada”.','Você venceu seus inimigos. Playstation!','Acaricie sua mão. Finja que é de uma garota!','Seu fim de semana. Também conhecido como “fail de semana”!','Hoje é o primeiro dia do resto da sua vida. Mas ontem também foi, e veja como acabou.','A vida é o que acontece quando você está ocupado lendo frases motivacionais.','Levante a mão se você já recebeu conselhos não solicitados suficientes sobre o que deve ser feito com os limões que a vida pode ou não lhe dar.','É tudo uma ladeira abaixo a partir daqui.','Não descanse antes de reclamar de tudo','Pode ser que o seu propósito na vida seja servir de aviso para os outros.','Nunca é tarde para falhar'
    ];
    this.breakBiscuit = this.breakBiscuit.bind(this);
  }

  breakBiscuit() {
    let s = this.state;

    let r = Math.floor(Math.random() * this.frases.length);

    s.texto = this.frases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./images/cookie.png')} />

        <Text style={styles.texto} >"{this.state.texto}"</Text>

        <Botao color="#B59619" text="Quebrar Biscoito" onPress={this.breakBiscuit} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  body: {
    paddingTop: 20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:17,
    color:'#B59619',
    margin:30,
    fontStyle:'italic'
  }
});