import { Image } from "expo-image"
// import {
// 	ArrowUp,
// 	Bookmark,
// 	ExternalLink,
// 	MessageSquare,
// 	MoreHorizontal,
// } from "lucide-react-native"
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import type { RedditLink } from "@/constants/db"

interface LinkCardProps {
	link: RedditLink
	searchQuery: string
	onTagClick: (tag: string) => void
	activeTag: string | null
}

// Paleta de colores — ajustá estos valores a tu theme (o importalos de un archivo de tokens)
const colors = {
	border: "#27272a",
	card: "#18181b",
	cardHover: "#1f1f23",
	foreground: "#fafafa",
	mutedForeground: "#a1a1aa",
	primary: "#f97316",
	primaryMuted: "rgba(249, 115, 22, 0.2)",
	primaryMutedBorder: "rgba(249, 115, 22, 0.5)",
	muted: "#27272a",
	black60: "rgba(0,0,0,0.6)",
	white80: "rgba(255,255,255,0.8)",
}

function formatVotes(n: number): string {
	if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
	return n.toString()
}

function formatComments(n: number): string {
	if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
	return n.toString()
}

// En RN no existe dangerouslySetInnerHTML ni <mark>, así que armamos
// el resaltado concatenando <Text> anidados con estilos distintos.
function HighlightedText({
	text,
	query,
	style,
}: {
	text: string
	query: string
	style?: any
}) {
	if (!query.trim()) {
		return <Text style={style}>{text}</Text>
	}

	const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
	const parts = text.split(new RegExp(`(${escaped})`, "gi"))

	return (
		<Text style={style}>
			{parts.map((part, i) =>
				part.toLowerCase() === query.toLowerCase() ? (
					<Text key={i} style={styles.highlight}>
						{part}
					</Text>
				) : (
					<Text key={i}>{part}</Text>
				),
			)}
		</Text>
	)
}

export function LinkCard({ link, searchQuery, onTagClick, activeTag }: LinkCardProps) {
	return (
		<View style={styles.card}>
			{/* Thumbnail */}
			<View style={styles.thumbnailWrapper}>
				{/*<Image
					source={{ uri: link.thumbnail }}
					style={styles.thumbnail}
					contentFit='cover'
					accessibilityLabel={`Preview de ${link.title}`}
				/>*/}
				{/* Domain badge over thumbnail */}
				<View style={styles.domainBadgeWrapper}>
					<Text style={styles.domainBadgeText}>{link.domain}</Text>
				</View>
			</View>

			{/* Content */}
			<View style={styles.content}>
				{/* Subreddit + date */}
				<View style={styles.metaRow}>
					<Text style={styles.subreddit}>{link.subreddit}</Text>
					<Text style={styles.metaDot}>•</Text>
					<Text style={styles.author}>by {link.author}</Text>
					<Text style={styles.savedAt}>{link.savedAt}</Text>
				</View>

				{/* Title */}
				<HighlightedText text={link.title} query={searchQuery} style={styles.title} />

				{/* Tags */}
				<View style={styles.tagsRow}>
					{link.tags.map((tag) => {
						const isActive = activeTag === tag
						return (
							<TouchableOpacity
								key={tag}
								onPress={() => onTagClick(tag)}
								style={[styles.tag, isActive ? styles.tagActive : styles.tagInactive]}
							>
								<Text style={[styles.tagText, isActive && styles.tagTextActive]}>
									{tag}
								</Text>
							</TouchableOpacity>
						)
					})}
				</View>

				{/* Footer stats */}
				<View style={styles.footer}>
					{/* Votes */}
					<View style={styles.statGroup}>
						{/*<ArrowUp size={14} color={colors.primary} strokeWidth={2.5} />*/}
						<Text style={styles.statValue}>{formatVotes(link.votes)}</Text>
						<Text style={styles.statLabel}>votos</Text>
					</View>

					{/* Comments */}
					<View style={styles.statGroup}>
						{/*<MessageSquare size={14} color={colors.mutedForeground} />*/}
						<Text style={styles.statValue}>{formatComments(link.comments)}</Text>
						<Text style={styles.statLabel}>comentarios</Text>
					</View>

					{/* Actions */}
					<View style={styles.actions}>
						<TouchableOpacity
							onPress={() => Linking.openURL(link.url)}
							style={styles.actionButton}
							accessibilityLabel='Abrir link'
						>
							{/*<ExternalLink size={14} color={colors.mutedForeground} />*/}
						</TouchableOpacity>
						<TouchableOpacity style={styles.actionButton} accessibilityLabel='Guardado'>
							{/*<Bookmark size={14} color={colors.primary} fill={colors.primary} />*/}
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.actionButton}
							accessibilityLabel='Más opciones'
						>
							{/*<MoreHorizontal size={14} color={colors.mutedForeground} />*/}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "column",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: colors.border,
		backgroundColor: colors.card,
		overflow: "hidden",
	},
	thumbnailWrapper: {
		width: 112,
		position: "relative",
	},
	thumbnail: {
		width: "100%",
		height: "100%",
	},
	domainBadgeWrapper: {
		position: "absolute",
		bottom: 8,
		left: 8,
		backgroundColor: colors.black60,
		borderRadius: 4,
		paddingHorizontal: 6,
		paddingVertical: 2,
	},
	domainBadgeText: {
		fontSize: 10,
		color: colors.white80,
		fontFamily: "monospace",
	},
	content: {
		flex: 1,
		flexDirection: "column",
		gap: 8,
		padding: 12,
		minWidth: 0,
	},
	metaRow: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		gap: 8,
	},
	subreddit: {
		fontSize: 12,
		fontWeight: "600",
		color: colors.primary,
	},
	metaDot: {
		color: colors.mutedForeground,
		fontSize: 12,
	},
	author: {
		fontSize: 12,
		color: colors.mutedForeground,
	},
	savedAt: {
		marginLeft: "auto",
		fontSize: 11,
		color: colors.mutedForeground,
		opacity: 0.6,
	},
	title: {
		fontSize: 14,
		fontWeight: "600",
		color: colors.foreground,
		lineHeight: 18,
	},
	highlight: {
		backgroundColor: "rgba(249, 115, 22, 0.3)",
		color: colors.foreground,
		borderRadius: 2,
	},
	tagsRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 6,
		marginTop: "auto",
	},
	tag: {
		borderRadius: 999,
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderWidth: 1,
	},
	tagActive: {
		backgroundColor: colors.primaryMuted,
		borderColor: colors.primaryMutedBorder,
	},
	tagInactive: {
		backgroundColor: colors.muted,
		borderColor: colors.border,
	},
	tagText: {
		fontSize: 11,
		fontWeight: "500",
		color: colors.mutedForeground,
	},
	tagTextActive: {
		color: colors.primary,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		marginTop: 4,
		paddingTop: 8,
		borderTopWidth: 1,
		borderTopColor: colors.border,
	},
	statGroup: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	statValue: {
		fontSize: 12,
		fontWeight: "600",
		color: colors.foreground,
	},
	statLabel: {
		fontSize: 12,
		color: colors.mutedForeground,
	},
	actions: {
		marginLeft: "auto",
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	actionButton: {
		width: 28,
		height: 28,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},
})
