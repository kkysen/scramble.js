isCommand() {
    command -v "${@}" > /dev/null
}

map() {
    local i=0
    while read -r line; do
        i=${i} "${@}" "${line}"
        ((i++))
    done
}

skipJustPrelude() {
    cat -s | tail -n +3
}

eval "${@}"
