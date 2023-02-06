const texts = [
    "我们曾经相爱，却不得不分开。",
    "我们许下了永远，却没有永远。",
    "我们曾经拥有，却不知道如何珍惜。",
    "你是我曾经最爱的人，却也是我最大的遗憾。",
    "我们走过了那么多岁月，却发现我们再也回不去了。",
    "你是我曾经唯一的依靠，却也成了我最大的伤害。",
    "我们曾经约定好了未来，却发现未来不属于我们。",
    "你是我曾经最美的记忆，却也是我最痛的回忆。",
    "我们曾经拥有一切，却发现我们失去了所有。",
    "你是我曾经最大的温柔，却也是我最大的伤口。"
  ];

  document.getElementById('generate-button').addEventListener('click', () => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    document.getElementById('text').textContent = text;
  });