import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../components/Participant";

export default function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Guilherme",
    "João",
    "pedro",
    "pedra",
    "fernando",
    "fernanda",
    "feijão",
    "Lol",
    "fsdfsdf",
    "dfsf",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert("Rodrigo ja existe!");
    }
    console.log("Botão acionado!");
    return Alert.alert("Rodrigo ja existe!");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante ',` Deseja remover o participante ${name}?`, [
        {
            text: 'Sim',
            onPress: () => Alert.alert("Deletado!")
        },
        {
            text: 'Não',
            style: 'cancel'
        }
    ]);
    console.log(` removeu ${name}`);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
          />
          <TouchableOpacity
            style={styles.buttom}
            onPress={handleParticipantAdd}
            activeOpacity={0.7}
          >
            <Text style={styles.buttomText}> + </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Nada na lista</Text>
          )}
        />
        {/* {participants.map((participant) => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))} */}
      </View>
    </SafeAreaView>
  );
}
