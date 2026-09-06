import tailwindcss from 'eleventy-plugin-tailwindcss-4'
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src")
    eleventyConfig.setOutputDirectory("_site")
    eleventyConfig.setLayoutsDirectory("layouts")

    eleventyConfig.addPlugin(tailwindcss, { input: 'src/tailwind.css', output: 'assets/css/tailwind.css' });
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setTemplateFormats(["liquid","md"]);

    // Pass-through copies
    eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "robots.txt" });
    eleventyConfig.addPassthroughCopy({ "./src/assets": "/assets" });

    // Watch targets
    eleventyConfig.addWatchTarget("./src/assets/");

    // Server options
    eleventyConfig.setServerOptions({
        port: 8080
    });
}