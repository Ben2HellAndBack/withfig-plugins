const plugin: Fig.Plugin = {
  name: "slugify",
  type: "shell",
  description: "ZSH plugin that converts filenames and directories to a web friendly format.",
  github: "lashoun/slugify",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;