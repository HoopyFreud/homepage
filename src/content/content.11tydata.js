export default {
	layout: "base",
	eleventyComputed: {
		permalink: (data) => {
			// Homepage - check for index.md in content root
			if (data.page.inputPath.endsWith("/content/index.liquid")) {
				return "/";
			}

			// Extract path relative to content folder
			const inputPath = data.page.inputPath;
			const contentMatch = inputPath.match(/\/content\/(.+?)(?:\/index)?\.liquid$/);
			if (contentMatch) {
				return `/${contentMatch[1]}/`;
			}

			// Fallback to file slug
			return `/${data.page.fileSlug}/`;
		},
	}
};