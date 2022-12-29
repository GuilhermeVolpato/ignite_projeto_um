import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Botão acionado!");
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
      </View>
    </SafeAreaView>
  );
}
