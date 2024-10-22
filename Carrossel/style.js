import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a1f",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 140,
    height: 140,
    position: "relative",
  },
  imageWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    position: "absolute",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#162645",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});