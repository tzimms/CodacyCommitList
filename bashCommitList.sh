#! /bin/bash
git clone --bare https://github.com/tzimms/VolkswagenDS.git tmpdir
cd tmpdir
git log master --pretty=format:'{%n  "commit": "%H",%n  "abbreviated_commit": "%h",%n  "parent": "%P",%n  "subject": "%s",%n  "body": "%b",%n  "author": {%n    "name": "%aN",%n    "email": "%aE",%n    "date": "%aD"%n  },%n  "commiter": {%n    "name": "%cN",%n    "email": "%cE",%n    "date": "%cD"%n  }%n},' > /Users/Toria/Documents/Job_Applications/codacyTests/apitest/commitList.txt
cd ..
rm -rf tmpdir