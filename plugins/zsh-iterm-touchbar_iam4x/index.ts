const plugin: Fig.Plugin = {
  name: "zsh-iterm-touchbar_iam4x",
  displayName: "zsh-iterm-touchbar",
  icon: "🍏",
  type: "shell",
  description: "Display feedback of terminal in the 🍏 Touchbar",
  authors: [
    {
      name: "iam4x",
      github: "iam4x",
      twitter: "iam4x",
    },
  ],
  github: "iam4x/zsh-iterm-touchbar",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "touchbar", "iterm2", "git", "productivity"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-iterm-touchbar.plugin.zsh"],
  },
  configuration: [
    {
      name: "Enable Git",
      description: "Enable Git status in the Touchbar",
      type: "environmentVariable",
      environmentVariable: "TOUCHBAR_GIT_ENABLED",
      interface: "toggle",
      default: true,
      compile: (value) => (value ? "true" : "false"),
    },
  ],
};

export default plugin;
