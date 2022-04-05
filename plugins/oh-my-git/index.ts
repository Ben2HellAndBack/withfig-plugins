const plugin: Fig.Plugin = {
  icon: "😎",
  name: "oh-my-git",
  type: "shell",
  icon: "images/git-icon.svg",
  screenshots: ["images/prompt.png"],
  description: "An opinionated git prompt for bash and zsh",
  authors: [
    {
      name: "arialdomartini",
      github: "arialdomartini",
      twitter: "arialdomartini",
    },
  ],
  github: "arialdomartini/oh-my-git",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["prompt.sh"],
  },

  configuration: [
    {
      name: "Display has Upstream",
      type: "environmentVariable",
      environmentVariable: "omg_display_has_upstream",
      interface: "toggle",
      default: false,
    },
    {
      name: "Display Tag",
      type: "environmentVariable",
      environmentVariable: "omg_display_tag",
      interface: "toggle",
      default: false,
    },
    {
      name: "Display Tag Name",
      type: "environmentVariable",
      environmentVariable: "omg_display_tag_name",
      interface: "toggle",
      default: true,
    },
    {
      name: "Two Lines",
      type: "environmentVariable",
      environmentVariable: "omg_two_lines",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Customizing symbols",
      description:
        "Change the icons representing various states of your git repository",
      additionalDetails: "By default, oh-my-git assumes that you have ",
      configuration: [
        {
          name: "Git Repo Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_is_a_git_repo_symbol",
          interface: "text",
          default: "❤",
        },
        {
          name: "Has Untracked Files Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_untracked_files_symbol",
          interface: "text",
          default: "∿",
        },
        {
          name: "Has Adds Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_adds_symbol",
          interface: "text",
          default: "+",
        },
        {
          name: "Has Deletions Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_deletions_symbol",
          interface: "text",
          default: "-",
        },
        {
          name: "Has Cached Deletions Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_cached_deletions_symbol",
          interface: "text",
          default: "✖",
        },
        {
          name: "Has Modifications Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_modifications_symbol",
          interface: "text",
          default: "✎",
        },
        {
          name: "Has Cached Modifications Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_cached_modifications_symbol",
          interface: "text",
          default: "☲",
        },
        {
          name: "Ready to Commit Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_ready_to_commit_symbol",
          interface: "text",
          default: "→",
        },
        {
          name: "Is On a Tab Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_is_on_a_tag_symbol",
          interface: "text",
          default: "⌫",
        },
        {
          name: "Needs to Merge Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_needs_to_merge_symbol",
          interface: "text",
          default: "ᄉ",
        },
        {
          name: "Has Upstream Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_upstream_symbol",
          interface: "text",
          default: "⇅",
        },
        {
          name: "Detached Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_detached_symbol",
          interface: "text",
          default: "⚯",
        },
        {
          name: "Can Fast-Forward Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_can_fast_forward_symbol",
          interface: "text",
          default: "»",
        },
        {
          name: "Has Diverged Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_diverged_symbol",
          interface: "text",
          default: "Ⴤ",
        },
        {
          name: "Not Tracked Branch Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_not_tracked_branch_symbol",
          interface: "text",
          default: "",
        },
        {
          name: "Rebase Tracking Branch Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_rebase_tracking_branch_symbol",
          interface: "text",
          default: "↶",
        },
        {
          name: "Merge Tracking Branch Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_merge_tracking_branch_symbol",
          interface: "text",
          default: "ᄉ",
        },
        {
          name: "Should Push Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_should_push_symbol",
          interface: "text",
          default: "↑",
        },
        {
          name: "Has Stashes Symbol",
          type: "environmentVariable",
          environmentVariable: "omg_has_stashes_symbol",
          interface: "text",
          default: "★",
        },
      ],
    },
  ],
};

export default plugin;
