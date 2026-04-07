# M1nu0x0.github.io

[Zensical](https://zensical.org/) 기반 블로그 겸 문서 사이트.

## 명령어

```bash
# 의존성 설치
uv sync

# 로컬 개발 서버 (http://localhost:8000)
uv run zensical serve

# 정적 사이트 빌드 (site/ 디렉토리 생성)
uv run zensical build
```

## 레퍼런스 파일 (`_ref`)

`docs/` 안의 `_ref` 접미사 파일들은 탐색 메뉴에 포함되지 않는 참고용 페이지입니다.
직접 URL로는 접근할 수 있으며, 삭제하지 않고 보존합니다.

| 파일 | 설명 |
|------|------|
| `docs/index_ref.md` | zensical 초기 생성 샘플 페이지 (기능 예시 모음) |
| `docs/markdown_ref.md` | Markdown 문법 레퍼런스 |

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.
