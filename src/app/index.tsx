import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "@/components/header"
import { LinkCard } from "@/components/link-card"
import { ThemedText } from "@/components/themed-text"
import { ThemedView } from "@/components/themed-view"
import { MOCK_LINKS } from "@/constants/db"
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme"

// function getDevMenuHint() {
// 	if (Platform.OS === "web") {
// 		return <ThemedText type='small'>use browser devtools</ThemedText>
// 	}
// 	if (Device.isDevice) {
// 		return (
// 			<ThemedText type='small'>
// 				shake device or press <ThemedText type='code'>m</ThemedText> in terminal
// 			</ThemedText>
// 		)
// 	}
// 	const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d"
// 	return (
// 		<ThemedText type='small'>
// 			press <ThemedText type='code'>{shortcut}</ThemedText>
// 		</ThemedText>
// 	)
// }

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<SafeAreaView style={styles.stepContainer}>
				<Header badgeText='12' />

				<ThemedView style={styles.containerList}>
					{/* contend */}

					<FlatList
						data={MOCK_LINKS}
						contentContainerStyle={styles.flatList}
						renderItem={({ item }) => (
							<LinkCard
								key={item.id}
								link={item}
								searchQuery=''
								onTagClick={() => {}}
								activeTag={null}
							/>
						)}
					/>
				</ThemedView>
			</SafeAreaView>
		</ThemedView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
	},
	flatList: {
		display: "flex",
		flexDirection: "column",
		gap: Spacing.three,
	},
	containerList: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: Spacing.three,
		paddingTop: Spacing.three,
		// alignItems: "center",
		// paddingBottom: BottomTabInset,
		// maxWidth: MaxContentWidth,
	},
	heroSection: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: Spacing.four,
		gap: Spacing.four,
	},
	title: {
		fontSize: 19,
	},
	code: {
		textTransform: "uppercase",
	},
	stepContainer: {
		flex: 1,
		// gap: Spacing.three,
		// alignSelf: "stretch",
		// paddingHorizontal: Spacing.three,
		// paddingVertical: Spacing.four,
		// borderRadius: Spacing.four,
	},
})
