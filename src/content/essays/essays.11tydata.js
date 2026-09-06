export default {
	activeKey: "Essays",
	eleventyComputed: {
		layout: (data) => data.page.inputPath.endsWith("/essays/index.md") ? "base" : "essay"
	}
};