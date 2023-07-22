export type AutocutConfig = {
  device: "cpu" | "cuda",
  whisperModel: "tiny" | "base" | "small" | "medium" | "large" | "large-v2",
  lang: "en" | "zh" | "ja",
}
