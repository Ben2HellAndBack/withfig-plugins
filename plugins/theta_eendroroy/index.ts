const plugin: Fig.Plugin = {
  name: "theta_eendroroy",
  type: "shell",
  description: "A fast and verbose zsh prompt",
  authors: [
    {
      name: "eendroroy",
      github: "eendroroy",
      twitter: "eendroroy",
    }
  ],
  github: "eendroroy/theta",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["theta.plugin.zsh"],
  },
};

export default plugin;