import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function GenerateBook() {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.inputContentName}>
                    <Text style={styles.formName}>Name</Text>
                </TextInput>
            </View>
        </View>
    )
}