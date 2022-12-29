import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  textInput: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  buttomText: {
    color: "#FFF",
    fontSize: 15,
  },
  buttom: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  emptyList: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center'
  },
});
