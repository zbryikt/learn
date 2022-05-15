require! <[fs]>
lines = fs.read-file-sync \raw .toString!split \\n .filter -> it
units = {}
current-word = null
idx = 1
for line in lines =>
  if ret = /^Unit\s+(\d+)/.exec(line) =>
    name = "unit #{ret.1}"
    units[name] = current-unit = {name: line, list: []}
  if !current-unit => continue
  if /^\d+/.exec(line) => continue #current-unit.list.push(current-word = {idx: +line})
  #if !current-word => continue
  if /^[a-zA-Z]+/.exec(line) =>
    current-word = {idx: idx++, english: line.trim!.split(\\n).map(->it.trim!)}
    if current-word.english.filter(-> (/[^a-zA-Z]/.exec(it) or it.length > 20)).length => continue
    current-unit.list.push current-word
    continue
  #  (current-word.[]english).push line
  #current-word.[]chinese.push line
  current-word.chinese = line


fs.write-file-sync "out.json", JSON.stringify(units)
