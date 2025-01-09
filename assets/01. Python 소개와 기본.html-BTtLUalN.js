import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as t,b as h,e as o,r as p,o as d,f as c,a as e}from"./app-ByvIdnmB.js";const g={};function y(m,n){const a=p("CodeTabs");return d(),s("div",null,[n[2]||(n[2]=t('<h1 id="_1-python-소개와-기본" tabindex="-1"><a class="header-anchor" href="#_1-python-소개와-기본"><span>1. Python 소개와 기본</span></a></h1><p>Python <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Docs</a></p><h2 id="_1-1-python-enhancement-proposal란" tabindex="-1"><a class="header-anchor" href="#_1-1-python-enhancement-proposal란"><span>1.1 Python Enhancement proposal란?</span></a></h2><p><a href="https://peps.python.org/pep-0000/" target="_blank" rel="noopener noreferrer">PEP</a>은 Python 언어에 대한 새로운 기능, 개선 제안, 또는 Python 커뮤니티에서 논의되는 표준화된 문서. Python의 개발 방향, 언어 설계 원칙, 라이브러리 변경, 문서화 등에 대한 내용을 포함.</p><ul><li><a href="https://peps.python.org/pep-0008/" target="_blank" rel="noopener noreferrer">PEP 8</a>: Python 코드 스타일 가이드</li><li><a href="https://peps.python.org/pep-0020/" target="_blank" rel="noopener noreferrer">PEP 20</a>: The Zen of Python</li><li><a href="https://peps.python.org/pep-0257/" target="_blank" rel="noopener noreferrer">PEP 257</a>: Docstring Convention</li><li><a href="https://peps.python.org/pep-0484/" target="_blank" rel="noopener noreferrer">PEP 484</a>: Type Hints</li><li><a href="https://peps.python.org/pep-0572/" target="_blank" rel="noopener noreferrer">PEP 572</a>: Assignment Expressions</li><li>..</li></ul><p>PEP 문서가 많으니 GPT한테 요약해달라고 하면 꽤나 잘 해준다.</p><h2 id="_1-2-동작-원리" tabindex="-1"><a class="header-anchor" href="#_1-2-동작-원리"><span>1.2 동작 원리</span></a></h2><p>파이썬을 사용 함에 있어서 동작 원리까지 깊게 팔 필요는 없어 보이는데, 알아두면 좋은 듯.</p><h3 id="_1-2-1-실행-흐름" tabindex="-1"><a class="header-anchor" href="#_1-2-1-실행-흐름"><span>1.2.1 실행 흐름</span></a></h3><p>Python은 <code>인터프리터</code>언어로, 소스코드가 아래 단계를 통해 실행 됨.</p><ol><li><strong>소스코드 작성</strong>: <code>.py</code> 파일에 Python 코드를 작성</li><li><strong>바이트코드 생성</strong>: Python 인터프리터가 소스코드를 바이트코드(.pyc)로 변환</li><li><strong>실행</strong>: Python 가상 머신(PVM)이 바이트코드를 실행</li></ol><h3 id="_1-2-2-구성-요소" tabindex="-1"><a class="header-anchor" href="#_1-2-2-구성-요소"><span>1.2.2 구성 요소</span></a></h3><ol><li>인터프리터 (<strong>Interpreter</strong>): 코드를 해석하고 실행하는 엔진. 대표적으로 CPython.</li><li>컴파일러 (<strong>Compiler</strong>): Python 코드를 바이트코드로 변환.</li><li>PVM (<strong>Python Virtual Machine</strong>): 바이트코드를 실행하는 가상 머신.</li></ol><h2 id="_1-2-개발-환경-설정" tabindex="-1"><a class="header-anchor" href="#_1-2-개발-환경-설정"><span>1.2 개발 환경 설정</span></a></h2><ul><li>Python 설치와 버전 관리 (<code>pyenv</code>, <code>conda</code>).</li><li>가상환경(<code>venv</code>, <code>virtualenv</code>) 설정 및 사용법.</li><li>패키지 관리 (<code>pip</code>, <code>pipenv</code>, <code>poetry</code>).</li><li><a href="https://docs.python.org/3/tutorial/venv.html" target="_blank" rel="noopener noreferrer">Python 환경 설정 Docs</a></li></ul><h3 id="_1-2-1-conda" tabindex="-1"><a class="header-anchor" href="#_1-2-1-conda"><span>1.2.1 conda</span></a></h3><p>conda <a href="../../Environments/Python/anaconda">설정</a></p><h2 id="_1-3-hello-world" tabindex="-1"><a class="header-anchor" href="#_1-3-hello-world"><span>1.3 Hello World!</span></a></h2>',18)),h(a,{id:"130",data:[{id:"python"}],"tab-id":"shell"},{title0:o(({value:r,isActive:l})=>n[0]||(n[0]=[c("python")])),tab0:o(({value:r,isActive:l})=>n[1]||(n[1]=[e("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"print"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"'Hello World!'"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),n[3]||(n[3]=t('<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> World!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">팁</p><p>python에서는 <code>&#39;</code>와 <code>&quot;</code>의 쓰임은 차이 없이 전부 string이다.</p></div>',2))])}const _=i(g,[["render",y],["__file","01. Python 소개와 기본.html.vue"]]),P=JSON.parse('{"path":"/posts/Languages/Python/01.%20Python%20%EC%86%8C%EA%B0%9C%EC%99%80%20%EA%B8%B0%EB%B3%B8.html","title":"1. Python 소개와 기본","lang":"ko-KR","frontmatter":{"title":"1. Python 소개와 기본","date":"2025-01-08T00:00:00.000Z","cover":"/posts/Languages/Python/01/thumbnail.png","category":["Language"],"tag":["Python"]},"headers":[{"level":2,"title":"1.1 Python Enhancement proposal란?","slug":"_1-1-python-enhancement-proposal란","link":"#_1-1-python-enhancement-proposal란","children":[]},{"level":2,"title":"1.2 동작 원리","slug":"_1-2-동작-원리","link":"#_1-2-동작-원리","children":[{"level":3,"title":"1.2.1 실행 흐름","slug":"_1-2-1-실행-흐름","link":"#_1-2-1-실행-흐름","children":[]},{"level":3,"title":"1.2.2 구성 요소","slug":"_1-2-2-구성-요소","link":"#_1-2-2-구성-요소","children":[]}]},{"level":2,"title":"1.2 개발 환경 설정","slug":"_1-2-개발-환경-설정","link":"#_1-2-개발-환경-설정","children":[{"level":3,"title":"1.2.1 conda","slug":"_1-2-1-conda","link":"#_1-2-1-conda","children":[]}]},{"level":2,"title":"1.3 Hello World!","slug":"_1-3-hello-world","link":"#_1-3-hello-world","children":[]}],"git":{"createdTime":1734432680000,"updatedTime":1736406135000,"contributors":[{"name":"M1nu0x0","username":"M1nu0x0","email":"oxygen3112@daum.net","commits":1,"url":"https://github.com/M1nu0x0"},{"name":"M1nu0x0","username":"M1nu0x0","email":"oxygen0112@naver.com","commits":5,"url":"https://github.com/M1nu0x0"},{"name":"m1nu0x0","username":"m1nu0x0","email":"oxygen0112@naver.com","commits":1,"url":"https://github.com/m1nu0x0"}]},"readingTime":{"minutes":0.47,"words":140},"filePathRelative":"posts/Languages/Python/01. Python 소개와 기본.md","localizedDate":"2025년 1월 8일","excerpt":"\\n<p>Python <a href=\\"https://docs.python.org/3/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Docs</a></p>\\n<h2>1.1 Python Enhancement proposal란?</h2>\\n<p><a href=\\"https://peps.python.org/pep-0000/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PEP</a>은 Python 언어에 대한 새로운 기능, 개선 제안, 또는 Python 커뮤니티에서 논의되는 표준화된 문서. Python의 개발 방향, 언어 설계 원칙, 라이브러리 변경, 문서화 등에 대한 내용을 포함.</p>"}');export{_ as comp,P as data};
