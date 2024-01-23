for FILE in $(git diff --name-only --diff-filter=ACM | grep -v Build.cs | xargs -I '{}' realpath --relative-to=. $(git rev-parse --show-toplevel)/'{}' | grep -E '.*\.(c|cpp|h|hpp)')
do
    echo "formating $FILE..."
    clang-format-12 -i $FILE
done
