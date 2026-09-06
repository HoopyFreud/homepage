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
		},
		navigationOptions: {
			listElement: "ul",
			listItemElement: "li",
			listClass: "flex flex-row w-full h-full gap-2 justify-evenly",
			listItemClass: "flex min-h-10 h-full w-full items-center justify-center rounded-lg px-2",
			listItemHasChildrenClass: "",
			activeListItemClass: "current",
			useAriaCurrentAttr: true,
			activeKey: (data) => data.activeKey || data.eleventyNavigation?.key || null
		}
	}
};