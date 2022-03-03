const plugin: Fig.Plugin = {
  name: "zellij (tranzystorek-io)",
  type: "shell",
  description: "Zsh plugin for zellij",
  github: "tranzystorek-io/zellij-zsh",
  shells: ["zsh"],
  tags: [
    "zsh-plugin",
    "zellij",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
