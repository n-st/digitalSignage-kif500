module.exports = {
	head: {
    title: 'digitalSignage by chaostreff-flensburg - Schilderwald as a Service',
		meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  generate: {
    dir: 'docs',
    routes: [
      '/',
      '/kif500',
    ]
  },
  router: {
    base: '/signs-kif500/'
  }
}
