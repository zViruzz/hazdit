import { StyleSheet } from "react-native"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { Spacing } from "@/constants/theme"

interface HeaderProps {
	badgeText: string
}

export default function Header({ badgeText }: HeaderProps) {
	return (
		<ThemedView style={styles.header}>
			<ThemedText style={styles.title}>Hazdit</ThemedText>

			<ThemedView style={styles.badge}>
				<ThemedText type='code' style={styles.badgeText}>
					{badgeText} Saved
				</ThemedText>
			</ThemedView>
		</ThemedView>
	)
}
const styles = StyleSheet.create({
	header: {
		// backgroundColor: "#222",
		height: 60,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "#333",
		paddingHorizontal: Spacing.four,
	},
	badge: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 9999,
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderWidth: 1,
		// --- Reemplaza con tu color primario real ---
		backgroundColor: "rgba(0, 122, 255, 0.15)",
		borderColor: "rgba(0, 122, 255, 0.20)",
	},
	badgeText: {
		fontSize: 12, // text-xs
		fontWeight: "500", // font-medium
		color: "rgb(0, 122, 255)", // text-primary
	},
	title: {
		fontSize: 19,
	},
	code: {
		textTransform: "uppercase",
	},
})
