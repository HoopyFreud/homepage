export default {
	layout: "base",
	eleventyComputed: {
		permalink: (data) => {
			// Homepage - check for index.md in content root
			if (data.page.inputPath.endsWith("/content/index.md")) {
				return "/";
			}

			// Extract path relative to content folder
			const inputPath = data.page.inputPath;
			const contentMatch = inputPath.match(/\/content\/(.+?)(?:\/index)?\.(liquid|md)$/);
			if (contentMatch) {
				return `/${contentMatch[1]}/`;
			}

			// Fallback to file slug
			return `/${data.page.fileSlug}/`;
		},
		title: (data) => {
			if (data.title !== "Mechanist.net") {
				return data.title + " | Mechanist.net"
			}
			else {
				return data.title
			}
		}
	}
};