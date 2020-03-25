#! /bin/bash
git clone --bare https://github.com/tzimms/VolkswagenDS.git tmpdir
cd tmpdir
: > /Users/Toria/Documents/Job_Applications/codacyTests/apitest/public/commitList.txt
git log master --pretty=format:'{"commit": "%H", %n  "author": "%aN %aE", %n  "date": "%ad",%n  "message": "%f"%n},'  > /Users/Toria/Documents/Job_Applications/codacyTests/apitest/public/commitList.txt
cd ..
rm -rf tmpdir

