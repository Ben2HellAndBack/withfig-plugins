const plugin: Fig.Plugin = {
  name: "docker (greymd)",
  type: "shell",
  description: "Zsh completion for docker and docker-compose.",
  github: "greymd/docker-zsh-completion",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
