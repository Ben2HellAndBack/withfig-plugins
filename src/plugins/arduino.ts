const plugin: Fig.Plugin = {
  name: "arduino",
  type: "shell",
  description: "zsh plugin for arduino build, upload and monitor",
  github: "raghur/zsh-arduino",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;