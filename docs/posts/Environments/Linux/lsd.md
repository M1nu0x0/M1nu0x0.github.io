---
title: lsd 설치 가이드
date: 2025-01-06
cover: /posts/Environments/Linux/lsd/thumbnail.png
category:
  - Environments
tag:
  - Linux
  - Ubuntu 24.04
  - lsd
  - brew tap
---
# lsd 설치 가이드
[Linux에서 brew 사용하기](./brew.md)

## lsd란?
기존 ls만으로는 가독성이 떨어져 알아보기 힘든 파일 구조를 알아보기 쉽게 하기 위한 플러그인.

`apt install lsd`만으로도 설치가 되지만 `zsh`와 `brew`를 이용해서 nerd-font 적용까지 해보려고 한다.

## lsd 설치
::: code-tabs#shell
@tab brew
```bash
brew install lsd
```
:::
::: details
```bash
==> Downloading https://formulae.brew.sh/api/formula.jws.json
#=#=#                                                                           
==> Downloading https://ghcr.io/v2/homebrew/core/lsd/manifests/1.1.5-1
######################################################################### 100.0%
==> Fetching lsd
==> Downloading https://ghcr.io/v2/homebrew/core/lsd/blobs/sha256:da5e2e98f82440
######################################################################### 100.0%
==> Pouring lsd--1.1.5.x86_64_linux.bottle.1.tar.gz
==> Caveats
Bash completion has been installed to:
  /home/linuxbrew/.linuxbrew/etc/bash_completion.d
==> Summary
🍺  /home/linuxbrew/.linuxbrew/Cellar/lsd/1.1.5: 12 files, 3.7MB
==> Running `brew cleanup lsd`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```
:::

## 폰트 설치
커스텀 폰트를 적용하기 위해서는 아래 repo를 install할 필요가 있다.
::: code-tabs#shell
@tab brew
```bash
brew tap homebrew/linux-fonts
```
:::
```bash
==> Tapping homebrew/linux-fonts
Cloning into '/home/linuxbrew/.linuxbrew/Homebrew/Library/Taps/homebrew/homebrew-linux-fonts'...
remote: Enumerating objects: 202098, done.
remote: Counting objects: 100% (11517/11517), done.
remote: Compressing objects: 100% (378/378), done.
remote: Total 202098 (delta 11252), reused 11179 (delta 11139), pack-reused 190581 (from 3)
Receiving objects: 100% (202098/202098), 32.55 MiB | 12.04 MiB/s, done.
Resolving deltas: 100% (161810/161810), done.
Tapped 1 command and 2402 formulae (2,432 files, 40.9MB).
```
::: tip brew tap이란?
`brew tap <user/repo>` 명령은 `https://github.com/<user>/homebrew-<repo>`의 repository를 `$(brew --repository)/Library/Taps`에 clone한다.

`tap`의 반대는 `untap`이다.

more details: [https://docs.brew.sh/Taps](https://docs.brew.sh/Taps)
:::
:::details cask-fonts
`tap`으로 예전처럼 `cask-fonts`를 다운 받으려고 하면 다음 오류가 발생한다.
```bash
Error: homebrew/cask-fonts was deprecated. This tap is now empty and all its contents were either deleted or migrated.
```
:::
이제 폰트를 다운 받아보자.

- D2Coding
::: code-tabs#shell
@tab brew
```bash
brew install homebrew/linux-fonts/font-d2coding-nerd-font
```
:::
::: details
```bash
==> Fetching homebrew/linux-fonts/font-d2coding-nerd-font
==> Downloading https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0
==> Downloading from https://objects.githubusercontent.com/github-production-rel
######################################################################### 100.0%
==> Installing font-d2coding-nerd-font from homebrew/linux-fonts
==> Downloading https://formulae.brew.sh/api/cask.jws.json
######################################################################### 100.0%
🍺  /home/linuxbrew/.linuxbrew/Cellar/font-d2coding-nerd-font/3.3.0: 11 files, 37.6MB, built in 1 second
==> Running `brew cleanup font-d2coding-nerd-font`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```
:::
- Hack
::: code-tabs#shell
@tab brew
```bash
brew install font-hack-nerd-font
```
:::
::: details
```bash
==> Fetching homebrew/linux-fonts/font-hack-nerd-font
==> Downloading https://github.com/ryanoasis/nerd-fonts/releases/download/v3.3.0
==> Downloading from https://objects.githubusercontent.com/github-production-rel
######################################################################### 100.0%
==> Installing font-hack-nerd-font from homebrew/linux-fonts
🍺  /home/linuxbrew/.linuxbrew/Cellar/font-hack-nerd-font/3.3.0: 17 files, 29.8MB, built in 0 seconds
==> Running `brew cleanup font-hack-nerd-font`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```
:::
- etc..

[nerdfonts](https://www.nerdfonts.com/font-downloads)

역시 `reboot`하면 폰트 적용이 잘 된다. 개인적으로 `font-hack-nerd-font`가 적용이 잘 되는 것 같다.

## alias
자주 사용하는 명령어의 alias를 적어두겠다. 필자는 linux에서 `zsh`를 사용하므로 `~/.zshrc`에 alias를 적도록 하겠다.
```bash
alias ll='lsd -alF'
alias la='lsd -A'
alias l='lsd'
alias lt='lsd --tree'
```
