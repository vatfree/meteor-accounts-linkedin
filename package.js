Package.describe({
  name: 'vatfree:accounts-linkedin',
  summary:
    'Login service for LinkedIn accounts, use with Meteor 2.3 & up',
  version: '5.0.1',
  git:
    'https://github.com/vatfree/meteor-accounts-linkedin.git',
})

Package.onUse(api => {
  api.versionsFrom('2.3')
  api.use('ecmascript')
  api.use('accounts-base', ['client', 'server'])
  api.imply('accounts-base', ['client', 'server'])
  api.use('accounts-oauth', ['client', 'server'])
  api.use('vatfree:linkedin-oauth@5.0.1', [
    'client',
    'server',
  ])
  api.imply('vatfree:linkedin-oauth')

  api.use('http', ['client', 'server'])

  // If users use accounts-ui but not linkedin-config-ui, give them a tip.
  api.use(
    ['accounts-ui', 'vatfree:linkedin-config-ui@5.0.1'],
    ['client', 'server'],
    { weak: true },
  )
  api.addFiles('notice.js')

  api.addFiles('linkedin.js')
})
