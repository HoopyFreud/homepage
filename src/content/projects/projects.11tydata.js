export default {
	activeKey: "Projects",
	eleventyComputed: {
		layout: (data) => data.page.inputPath.endsWith("/projects/index.md") ? "base" : "project"
	}
};