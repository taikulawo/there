// copy from melody theme

hexo.on('generateBefore', function () {
    const rootConfig = hexo.config
    if (hexo.locals.get) {
      const data = hexo.locals.get('data')
      data && data.there && (hexo.theme.config = data.there)
    }
    hexo.theme.config.rootConfig = rootConfig
})