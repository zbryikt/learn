<-(->it.apply {}) _

sfx =
  right: new Audio \/assets/sfx/right.ogg
  wrong: new Audio \/assets/sfx/wrong.ogg


names = <[家豪 志明 俊傑 建宏 俊宏 志豪 志偉 文雄 金龍 志強 淑芬 淑惠 美玲 雅婷 美惠 麗華 淑娟 淑貞 怡君 淑華]>
fruits = <[士多啤梨 大樹菠蘿 山竹 火龍果 木瓜 牛油果 西瓜 西柚 西梅 芒果 奇異果 枇杷 青檸 青蘋果 哈密瓜 柿 柑 柚子 紅毛丹 香蕉 紅桑子 桃 桃駁梨 荔枝 梨 提子 番石榴 番荔枝 菠蘿 黑莓 楊桃 榴槤 蜜瓜 熱情果 蓮霧 橙 龍眼 檸檬 藍莓 蘋果 櫻桃 椰子 黃皮 無花果 椰青]>

get-name = ->
  idx1 = Math.floor(Math.random!*names.length)
  while true
    idx2 = Math.floor(Math.random!*names.length)
    if idx2 != idx1 => break
  return [names[idx1], names[idx2]]

get-fruit = ->
  idx1 = Math.floor(Math.random!*names.length)
  return fruits[idx1]

view = new ldview do
  init-render: false
  root: document.body
  action:
    click: "reply-button": ({evt}) -> get-response.resolve view.get("reply-input").value
    keyup: "reply-input": ({evt}) ->
      if evt.keyCode == 13 => get-response.resolve view.get("reply-input").value
  text:
    question: ({ctx}) -> ctx.question.question
    idx: ({ctx}) -> ctx.question.idx
  handler:
    elapsed: ({node, ctx}) ->
      elapsed = ctx.history.reduce(((a,b) -> a + b.elapsed),0)
      elapsed = elapsed / (ctx.history.length or 1)
      node.innerText = (elapsed / 1000).toFixed(1)
    "reply-input": ({node}) -> node.value = ''
    total: ({node, ctx}) -> node.innerText = ctx.history.length
    count: ({node, ctx}) ->
      type = node.getAttribute \data-name
      result = type == \correct
      node.innerText = ctx.history.filter(-> it.result == result).length

    percent: ({node, ctx}) ->
      percent = 100 * ctx.history.filter(-> it.result).length / (ctx.history.length or 1)
      node.innerText = (percent).toFixed(1)

    history:
      list: ({ctx}) -> ctx.history
      key: -> it.idx
      view:
        text:
          question: ({ctx}) -> ctx.question
          idx: ({ctx}) -> ctx.idx
          answer: ({ctx}) -> ctx.answer
          response: ({ctx}) -> ctx.response
          elapsed: ({ctx}) -> (ctx.elapsed / 1000).toFixed(1)
        handler:
          "@": ({node, ctx}) ->
            node.classList.toggle \border-success, ctx.result
            node.classList.toggle \border-danger, !ctx.result

          result: ({node,ctx}) ->
            node.setAttribute \class, if ctx.result => "i-check text-success" else "i-close text-danger"

ctx =
  history: []
  question: {}
view.setCtx ctx

get-response = proxise ->

question = (idx) ->
  if idx >= 100 => return Promise.resolve!
  Promise.resolve!
    .then ->
      [n1, n2] = get-name!
      fruit = get-fruit!
      fp = Math.ceil(Math.random! * 9)
      c1 = Math.ceil(1 + Math.random! * 11)
      c2 = Math.ceil(1 + Math.random! * 11)
      answer = fp * (c1 + c2)
      t1 = Date.now!
      obj =
        idx: idx
        question: "#fruit 一個賣 #fp 元\n#n1 買 #c1 個\n#n2 買 #c2 個\n請問他們一共花了多少錢?"
        t1: t1
        answer: answer
        response: null
      ctx.question = obj
      view.render!
      get-response!
        .then (v) ->
          obj.t2 = t2 = Date.now!
          obj.elapsed = obj.t2 - obj.t1
          obj.result = ((+v) == obj.answer)
          obj.response = v
          if obj.result => sfx.right.play!
          else sfx.wrong.play!
          ctx.history.splice 0, 0, obj
          view.render!

    .then -> question(idx + 1)
question 1

