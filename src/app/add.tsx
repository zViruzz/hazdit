import { Host, Icon } from "@expo/ui"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"

const tags = ["programacion", "datos"]

export default function AddScreen() {
	const [redditLink, setRedditLink] = useState("")

	return (
		<ThemedView style={styles.container}>
			<SafeAreaView>
				<ThemedView style={styles.titleContainer}>
					<ThemedText style={styles.title}>Guardar Link de Reddit</ThemedText>
					<ThemedText style={styles.subtitle}>
						Pega un link, agrega etiquetas y guarda.
					</ThemedText>
				</ThemedView>

				<ThemedView>
					<Host matchContents style={styles.label}>
						<Icon
							name={Icon.select({
								ios: "star.fill",
								android: import("@expo/material-symbols/link_2.xml"),
							})}
							size={32}
							color='white'
						/>
						<ThemedText> RedditLink</ThemedText>
					</Host>
					<TextInput
						style={styles.input}
						placeholder='https://www.reddit.com/r/...'
						keyboardType='url'
						placeholderTextColor='#999'
						value={redditLink}
						onChangeText={(nuevoTexto) => setRedditLink(nuevoTexto)}
					/>
				</ThemedView>
				<ThemedView>
					<TouchableOpacity
						// onPress={() => onTagClick(tag)}
						style={styles.tag}
					>
						<Text style={styles.tagText}>tecnologia</Text>
					</TouchableOpacity>
				</ThemedView>
				<ThemedView>
					<TouchableOpacity onPress={() => setRedditLink("")} style={styles.clearButton}>
						<Host matchContents>
							<Icon
								name={Icon.select({
									ios: "star.fill",
									android: import("@expo/material-symbols/add.xml"),
								})}
								size={32}
								color='white'
							/>
						</Host>
					</TouchableOpacity>
				</ThemedView>
			</SafeAreaView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		paddingHorizontal: 30,
	},
	titleContainer: {
		marginVertical: 40,
	},
	title: {
		// textAlign: "left",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	subtitle: {
		color: "#6A6A6A",
	},
	label: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		marginBottom: 8,
	},
	input: {
		backgroundColor: "#111",
		borderWidth: 1,
		borderColor: "#222",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,
		fontSize: 16,
		color: "#fff",
	},
	tag: {
		borderRadius: 999,
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderWidth: 1,
		backgroundColor: "#27272a",
	},
	tagText: {
		fontSize: 11,
		fontWeight: "500",
		color: "#a1a1aa",
	},
	clearButton: {
		padding: 8,
		borderRadius: 999,
		backgroundColor: "#ff6600",
	},
})
