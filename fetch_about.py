#!/usr/bin/env python3
# /// script
# requires-python = ">=3.11"
# ///
"""GitHub 프로필 README를 docs/about.md로 fetch"""

import urllib.request
from pathlib import Path

ABOUT_URL = "https://raw.githubusercontent.com/M1nu0x0/M1nu0x0/main/README.md"
ABOUT_PATH = Path("docs/about.md")

print(f"Fetching {ABOUT_URL} ...")
try:
    with urllib.request.urlopen(ABOUT_URL) as res:
        ABOUT_PATH.write_bytes(res.read())
    print(f"Saved to {ABOUT_PATH}")
except Exception as e:
    print(f"fetch 실패: {e}")
