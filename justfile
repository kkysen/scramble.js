set shell := ["bash", "./scripts/just.sh"]

_default:
    just --list

push *args:
    git push "{{args}}"

pull *args:
    git push "{{args}}"

deploy:
    npm run deploy

node script *args:
    node "./scripts/{{script}}.mjs" {{args}}

indexLexicons: (node "indexLexicons")

addLexicon name path: (node "addLexicon" name path)

addLexicons *paths: (node "addLexicons" paths)

addAptLexicon fileName: (addLexicons "/usr/share/dict/" + fileName)

addAptLexicons: (addAptLexicon "*")

echoInstallAptLexicons:
    just aptLexiconPackages | skipJustPrelude | map echo apt install

installAptLexicons:
    just echoInstallAptLexicons | sudo "${SHELL}"

# from https://packages.debian.org/sid/wordlist
aptLexiconPackages:
    #!/usr/bin/env cat
    miscfiles
    wamerican
    wamerican-huge
    wamerican-insane
    wamerican-large
    wamerican-small
    wbrazilian
    wbritish
    wbritish-huge
    wbritish-insane
    wbritish-large
    wbritish-small
    wbulgarian
    wcanadian
    wcanadian-huge
    wcanadian-insane
    wcanadian-large
    wcanadian-small
    wcatalan
    wdanish
    wdutch
    wesperanto
    wfaroese
    wfrench
    wgalician-minimos
    wgerman-medical
    witalian
    wngerman
    wnorwegian
    wogerman
    wpolish
    wportuguese
    wspanish
    wswedish
    wswiss
    wukrainian
