const plugin: Fig.Plugin = {
  name: "hub",
  type: "shell",
  description: "Github hub zsh plugin for forking model",
  github: "soraliu/zsh-hub",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
