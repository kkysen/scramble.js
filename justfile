set shell := ["bash", "-c"]

_default:
    just --list

indexLexicons:
    node ./indexLexicons.mjs
