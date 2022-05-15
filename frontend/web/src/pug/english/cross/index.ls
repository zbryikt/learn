ld$.fetch "/assets/data/english.json", {method: \GET}, {type: \json}
  .then (data) ->
    [col, row] = [10, 10]
    cells = [0 til row].map -> [0 til col].map(-> null)
    wordlist = []
    for k,unit of data =>
      for word in unit.list =>
        word.engobj =
          words: word.english.map (d,i) -> {text: d, idx: i}
        word.engobj.words.map (obj) ->
          obj.chars = obj.text.split('').map (d,i) ->
            code = d.toLowerCase!charCodeAt(0) - 97
            { char: d, code: code, idx: i}
        wordlist.push word
    # TODO
    add-word = ->

      word = wordlist[Math.floor(wordlist.length * Math.random!)]
      eng = word.engobj.words.0
      len = eng.chars.length
      dir = Math.floor(2 * Math.random!)
      x = Math.floor(col * Math.random!)
      y = Math.floor(row * Math.random!)
      if dir == 0 => x = x <? len
      if dir == 1 => y = y <? len
      [dx, dy, fail] = [0, 0, false]
      for i from 0 til len =>
        console.log x + dx, y + dy
        c = cells[y + dy][x + dx]
        if c and c.char != eng.chars[i].char =>
          fail = true
          break
        if !c =>
          for j from -1 to 1
            [sx, sy] = [x + dy, y + dy]
            if dir => sx = (sx + j) >? 0 <? col - 1
            else if !dir => sy = (sy + j) >? 0 <? row - 1
            if cells[sy][sx] =>
              fail = true
              break
        if dir => dy++ else dx++
      if !fail => 
        [dx, dy, fail] = [0, 0, false]
        for i from 0 til len =>
          cells[y + dy][x + dx] = eng.chars[i]
          if dir => dy++ else dx++
    for i from 0 til 100 => add-word!
    all-cells = []
    for i from 0 til row => all-cells ++= cells[i]
    view = new ldview do
      root: document.body
      handler:
        cell:
          list: -> all-cells.map -> if !it => {} else it
          view:
            handler: "@": ({node, ctx}) -> 
              node.classList.toggle \disabled, !ctx.char
              node.innerText = ctx.char or ''

