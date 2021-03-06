main = (opt={}) ->
  @opt = opt
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  if opt.is-valid => @is-valid = opt.is-valid
  @action = \signup
  @auth = opt.auth
  @ready = false
  @info = \default
  @init!
  @

main.prototype = Object.create(Object.prototype) <<< do
  set-action: (a) -> @action = a
  switch: (name = 'signup') ->
    @action = name
    @view.render <[form tab show]>
  set-info: ->
    @info = it
    @view.render <[info]>
  init: ->
    @view = new ldView do
      root: @root
      handler:
        "forgot-password": ({node}) -> node.setAttribute \href, "/auth/reset/"
        submit: ({node}) ~> node.classList.toggle \disabled, !@ready
        form: ({node}) ~> <[login signup]>.map ~> node.classList.toggle it, @action == it
        info: ({node}) ~>
          node.classList.toggle \d-none, node.getAttribute(\data-name) != @info

        tab: ({node}) ~>
          n = node.getAttribute(\data-name)
          node.classList.toggle \active, @action == n
        show: ({node}) ~>
          n = node.getAttribute(\data-tab)
          node.classList.toggle \d-none, @action != n
      action:
        keyup: password: ({evt}) ~> if evt.keyCode == 13 => @form.check {now: true} .then ~> @submit!
        click:
          submit: ~> @submit!
          tab: ({node}) ~> @switch(node.getAttribute(\data-name))

    @ldld = new ldLoader root: @view.get('submit')

    @form = form = new ldForm do
      names: -> <[username password displayname]>
      after-check: (s, f) ~>
        if s.username != 1 and !@is-valid.username(f.username.value) => s.username = 2
        if s.password != 1 =>
          s.password = if !f.password.value => 1 else if !@is-valid.password(f.password.value) => 2 else 0
        if @action == \login => s.displayname = 0
        else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
      root: @root

    @form.on \readystatechange, ~> @ready = it; @view.render <[submit]>

  submit: ->
    if !@form.ready! => return
    @ldld.on!
    val = @form.values!
    body = {} <<< val{username, password, displayname}
    Promise.resolve!
      .then ~>
        data = {}
        ld$.fetch "#{@auth.api-root!}#{@action}", {method: \POST}, {json: body}
      .then ~> @auth.fetch!
      .finally ~> @ldld.off!
      .then (g) ~>
        @set-info \default
        @form.reset!
      .catch (e) ~>
        console.log e
        @set-info "#{@action}-failed"
        @form.fields.password.value = null
        @form.check {n: \password, now: true}

  is-valid: 
    username: (u) -> curegex.get('email').exec(u)
    password: (p) -> p and p.length >= 8

if window? => window.authpanel = main
