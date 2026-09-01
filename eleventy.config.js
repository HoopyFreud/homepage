import tailwindcss from 'eleventy-plugin-tailwindcss-4'
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src")
    eleventyConfig.setOutputDirectory("_site")
    eleventyConfig.setLayoutsDirectory("layouts")

    eleventyConfig.addPlugin(tailwindcss, { input: 'src/tailwind.css', output: 'assets/css/tailwind.css', debug: true });
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setTemplateFormats(["liquid","md"]);

    // Pass-through copies
    eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "robots.txt" });
    eleventyConfig.addPassthroughCopy({ "./src/assets/css": "/assets/css" });
    eleventyConfig.addPassthroughCopy({ "./src/assets/file": "/assets/file" });
    eleventyConfig.addPassthroughCopy({ "./src/assets/fonts": "/assets/fonts" });
    eleventyConfig.addPassthroughCopy({ "./src/assets/img": "/assets/img" });
    eleventyConfig.addPassthroughCopy({ "./src/assets/js": "/assets/js" });

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/css/");
    eleventyConfig.addWatchTarget("./src/assets/js/");

    // Server options
    eleventyConfig.setServerOptions({
        port: 8080,
        watch: ["_site/assets/css/**/*.css", "_site/assets/js/**/*.js"],
    });
}