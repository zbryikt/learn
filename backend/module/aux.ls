base = do
  ip: (req) ->
    return (
      req.headers['cf-connecting-ip'] or req.headers['x-forwarded-for'] or
      req.headers['X-Real-IP'] or req.headers['x-real-ip'] or req.connection.remoteAddress
    )

  # autocatch / routecatch
  #  - serve for automatically catching rejections to prevent server crashed.
  #  - deprecate when express 5 releases.
  # autocatch: for wrapping functions
  # try using routecatch instead of autocatch for easier migration to express 5 in the future.
  #  - todo: will it be better to keep consistency by removing silence param?
  autocatch: (handler, silence = false) -> (req, res, next) ->
    ret = handler req, res, next
    if !(ret instanceof Promise) =>
      if silence => return
      next new Error('autocatch is used yet return value of callback is not a Promise.')
    else ret.catch -> next it
  # routecatch: for wrapping routers.
  routecatch: (route) ->
    <[get post put delete]>.map (n) ->
      route["_#n"] = route[n]
      route[n] = (...args) ->
        args = args.map (d,i) -> if d instanceof Function and (i == args.length - 1) => base.autocatch(d,true) else d
        @["_#n"].apply @, args#args.map -> if it instanceof Function => base.autocatch(it) else it
    return route


  signed-in:
    api: (req, res, next) ->
      return if req.user and req.user.key > 0 => next!
      else res.status(403).send {}
    view: (req, res, next) ->
      return if req.user and req.user.key > 0 => next!
      else res.status(403).redirect "/auth/?nexturl=/#{req.originalUrl}"

  reject: (code=403,msg="") ->
    Promise.reject new Error(if typeof(msg) == typeof({}) => JSON.stringify(msg) else msg) <<< {code, name: 'lderror'}

module.exports = base
