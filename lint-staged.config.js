module.exports = {
  '*.json': ['prettier --write', 'git add'],
  '*.{vue,js}': ['prettier --write', 'eslint --fix', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}
