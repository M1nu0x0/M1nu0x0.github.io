---
title: brew 설치 가이드
date: 2025-01-06
cover: /posts/Environments/Linux/brew/thumbnail.png
category:
  - Environments
tag:
  - Linux
  - Ubuntu 24.04
  - Homebrew
  - gcc
---
# brew 설치 가이드

## Homebrew란?
맥스 호웰이 개발한 맥OS용 패키지 관리자.

## Homebrew 설치
::: code-tabs#shell
@tab apt
```bash
sudo apt update && sudo apt upgrade -y
```
:::
curl을 이용하여 설치를 할 것이니, 우선 curl을 다운 받도록 하자.
::: code-tabs#shell
@tab apt
``` bash
sudo apt install curl -y
```
:::
curl을 이용하여 아래 script를 다운받고 실행하자.
::: code-tabs#shell
@tab Bash
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
:::

```bash {26}
==> Checking for `sudo` access (which may request your password)...
==> This script will install:
/home/linuxbrew/.linuxbrew/bin/brew
/home/linuxbrew/.linuxbrew/share/doc/homebrew
/home/linuxbrew/.linuxbrew/share/man/man1/brew.1
/home/linuxbrew/.linuxbrew/share/zsh/site-functions/_brew
/home/linuxbrew/.linuxbrew/etc/bash_completion.d/brew
/home/linuxbrew/.linuxbrew/Homebrew
==> The following new directories will be created:
/home/linuxbrew/.linuxbrew/bin
/home/linuxbrew/.linuxbrew/etc
/home/linuxbrew/.linuxbrew/include
/home/linuxbrew/.linuxbrew/lib
/home/linuxbrew/.linuxbrew/sbin
/home/linuxbrew/.linuxbrew/share
/home/linuxbrew/.linuxbrew/var
/home/linuxbrew/.linuxbrew/opt
/home/linuxbrew/.linuxbrew/share/zsh
/home/linuxbrew/.linuxbrew/share/zsh/site-functions
/home/linuxbrew/.linuxbrew/var/homebrew
/home/linuxbrew/.linuxbrew/var/homebrew/linked
/home/linuxbrew/.linuxbrew/Cellar
/home/linuxbrew/.linuxbrew/Caskroom
/home/linuxbrew/.linuxbrew/Frameworks

Press RETURN/ENTER to continue or any other key to abort:
```
`RETURN/ENTER`를 눌러 계속
```bash {3}
Warning: /home/linuxbrew/.linuxbrew/bin is not in your PATH.
  Instructions on how to configure your shell for Homebrew
  can be found in the 'Next steps' section below.
==> Installation successful!
```
뜨는 메시지를 보면 아직 PATH 설정이 되지 않았다고 한다.
```bash {1-5,7}
==> Next steps:
- Run these commands in your terminal to add Homebrew to your PATH:
    echo >> /home/user-name/.bashrc
    echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/user-name/.bashrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
- Install Homebrew's dependencies if you have sudo access:
    sudo apt-get install build-essential
  For more information, see:
    https://docs.brew.sh/Homebrew-on-Linux
- We recommend that you install GCC:
    brew install gcc
- Run brew help to get started
- Further documentation:
    https://docs.brew.sh
```
`Next steps:`를 참조하여 PATH 설정을 해주자.
::: code-tabs#shell
@tab Bash
```bash
echo >> /home/user-name/.bashrc
```
:::
::: code-tabs#shell
@tab Bash
```bash
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/user-name/.bashrc
```
:::
::: code-tabs#shell
@tab Bash
```bash
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```
:::
sudo 권한이 있다면 Homebrew의 의존성을 설치해달라고 한다.
::: code-tabs#shell
@tab apt-get
```bash
sudo apt-get install build-essential
```
:::

## Homebrew 확인
::: code-tabs#shell
@tab brew
```bash
brew --version
```
:::
```bash
Homebrew 4.4.14
```
or
::: code-tabs#shell
@tab brew
``` bash
brew doctor
```
:::
```bash
Your system is ready to brew.
```

## Homebrew 업데이트
::: code-tabs#shell
@tab brew
``` bash
brew udpate
```
:::
```bash
==> Updating Homebrew...
Already up-to-date.
```

## Homebrew 삭제
::: code-tabs#shell
@tab Bash
```bash
curl -fsSL -o uninstall.sh https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh
```
:::
::: code-tabs#shell
@tab Bash
```bash
bash uninstall.sh
```
:::
이후 ~/.bashrc 하단 내용을 지우면 된다.
```bash {3}
...

eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

## brew Install test
```bash
- We recommend that you install GCC:
    brew install gcc
```
명령어 추천으로 GCC 설치를 해보라고 한다.
::: code-tabs#shell
@tab brew
```bash
brew install gcc
```
:::
설치가 다 되면 확인해보자.
::: code-tabs#shell
@tab Bash
```bash
gcc --version
```
:::
```bash
gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## brew Upgrade test
gcc를 업그레이드 해보자.
::: code-tabs#shell
@tab brew
```bash
brew upgrade gcc
```
:::
```bash
Warning: gcc 14.2.0_1 already installed
```

## brew Uninstall test
gcc를 삭제해보자.
::: code-tabs#shell
@tab brew
```bash
brew uninstall gcc
```
:::
```bash
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/gcc/14.2.0_1... (2,105 files, 550.9MB)
==> Autoremoving 9 unneeded formulae:
binutils
gmp
isl
libmpc
lz4
mpfr
xz
zlib
zstd
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/isl/0.27... (75 files, 9.9MB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/libmpc/1.3.1... (14 files, 642.9KB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/binutils/2.43.1... (6,513 files, 394.5MB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/zstd/1.5.6... (32 files, 2.9MB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/mpfr/4.2.1... (32 files, 3.9MB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/zlib/1.3.1... (14 files, 476.0KB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/lz4/1.10.0... (24 files, 798.7KB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/xz/5.6.3... (97 files, 2MB)
Uninstalling /home/linuxbrew/.linuxbrew/Cellar/gmp/6.3.0... (24 files, 3.9MB)
```
