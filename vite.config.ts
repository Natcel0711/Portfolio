import { sveltekit } from "@sveltejs/kit/vite";
import pluginYaml from "@rollup/plugin-yaml";
import yaml from "js-yaml";
import { dataToEsm } from "@rollup/pluginutils";
import type { UserConfig } from "vite";

/** A custom Markdown plugin for Vite, with TOML frontmatter support. */
function markdown() {
  return {
    name: "markdown",

    transform(src, id) {
      if (/\.md$/.test(id)) {
        let frontmatter = {};
        let content = src;
        if (src.startsWith("---")) {
          const end = src.indexOf("---", 3);
          if (end === -1) {
            throw new Error(`Unclosed TOML frontmatter in ${id}`);
          }
          frontmatter = yaml.load(src.substring(3, end).trim());
          content = src.substring(end + 3).trim();
        }
        return {
          code: dataToEsm({ ...frontmatter, content }),
          map: null,
        };
      }
    },
  };
}

const config: UserConfig = {
  plugins: [sveltekit(), pluginYaml(), markdown()],
  ssr: {
    noExternal: [
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
};

export default config;