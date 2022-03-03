const plugin: Fig.Plugin = {
  name: "hints",
  type: "shell",
  description: "Easily display non-completable trivia right under your editing buffer",
  github: "joepvd/zsh-hints",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
