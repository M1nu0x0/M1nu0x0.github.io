export const sidebar = {
  "/": [
    {
      text: "AI",
      collapsible: true,
      children: [],
    },
    {
      text: "Environments",
      collapsible: true,
      children: [
        {
          text: "Linux",
          collapsible: true,
          children: [
            "/posts/Environments/Linux/brew.md",
            "/posts/Environments/Linux/ohmyzsh.md",
            "/posts/Environments/Linux/lsd.md",
          ],
        },
        {
          text: "Python",
          collapsible: true,
          children: ["/posts/Environments/Python/anaconda.md"],
        },
      ],
    },
    {
      text: "Languages",
      collapsible: true,
      children: [
        {
          text: "Python",
          collapsible: true,
          children: [
            "/posts/Languages/Python/01. Python 소개와 기본.md",
            "/posts/Languages/Python/02. Python 기본 문법.md",
            "/posts/Languages/Python/03. Python 객체 모델.md",
            "/posts/Languages/Python/04. 클래스와 객체 지향.md",
            "/posts/Languages/Python/05. Iterable. Iterator, Generator.md",
            "/posts/Languages/Python/06. argparse와 스크립트 실행.md",
            "/posts/Languages/Python/07. 라이브러리 작성과 관리.md",
            "/posts/Languages/Python/08. 고급 Python 주제.md",
            "/posts/Languages/Python/09. 최적화와 성능.md",
            "/posts/Languages/Python/10. Built-in 라이브러리.md",
          ],
        },
        {
          text: "C++",
          collapsible: true,
          children: ["/posts/Languages/Cpp/01. cpp 소개와 기본.md"],
        },
        {
          text: "Java",
          collapsible: true,
          children: [],
        },
      ],
    },
  ],
};
