ld$.fetch "/assets/data/english.json", {method: \GET}, {type: \json}
  .then (data) ->
    ctx = {}
    pick = ->
      list = [v for k,v of data]
      unit = list[Math.floor(list.length * Math.random!)]
      word = unit.list[Math.floor(unit.list.length * Math.random!)]
      word.engobj =
        words: word.english.map (d,i) -> {text: d, idx: i}
      word.engobj.words.map (obj) ->
        obj.chars = obj.text.split('').map (d,i) ->
          code = d.toLowerCase!charCodeAt(0) - 97
          { char: d, code: code, idx: i}
      ctx.word = word
      view.setCtx ctx
      word <<< try: undefined, ptr: 0
    reply = ({node, ctx}) ->
      answer = view.get \answer
      v = answer.value
      if v == ctx.word.english => alert \ok
      else alert \no
      pick!
      view.render!

    view = new ldview do
      init-render: false
      ctx: ctx
      root: document.body
      handler:
        word: ({node, ctx}) -> node.innerText = ctx.word.chinese
        english:
          list: ({ctx}) -> ctx.word.engobj.words
          view:
            handler:
              cell:
                list: ({ctx}) -> ctx.chars
                view:
                  handler: "@": ({node, ctx, ctxs}) ->
                    show = ctxs.1.word.ptr > ctx.idx
                    active = ctxs.1.word.ptr == ctx.idx
                    wrong = active and ctxs.1.word.try? and ctxs.1.word.try != ctx.code
                    if ctxs.1.word.ptr >= ctxs.0.chars.length => 
                      node.style.animationDelay = "#{(ctx.idx / ctxs.0.chars.length) * 0.4}s"
                      node.style.animationDuration = ".4s"
                      node.classList.add \ld-bounce
                    else
                      node.style.animationDelay = "0s"
                      node.style.animationDuration = "1s"
                      node.classList.remove \ld-bounce

                    node.classList.toggle \active, active
                    node.innerText = if show => ctx.char else "?"
                    if wrong =>
                      node.classList.remove \ld-jingle, false
                      setTimeout (-> node.classList.add \ld-jingle), 150

      action:
        click: reply: ({ctx}) -> reply({ctx})
        keyup: answer: ({evt, ctx}) ->
          if evt.keyCode == 13 => reply({ctx})
    document.addEventListener \keypress, (evt) ->
      key = evt.keyCode
      key = if key >= 65 and key < 97 => key - 65
      else if key >=97 => key - 97
      if key > 25 => return
      chars = ctx.word.engobj.words.0.chars
      if !chars[ctx.word.ptr] => return
      c = chars[ctx.word.ptr].code
      ctx.word.try = key
      if c == key =>
        ctx.word.try = undefined
        ctx.word.ptr++
        if ctx.word.ptr > chars.length - 1 =>
          setTimeout (-> pick!; view.render!), 750
      view.render!
    pick!
    view.render!
