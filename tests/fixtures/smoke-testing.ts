#!/usr/bin/env ts-node

// tslint:disable:arrow-parens
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:no-shadowed-variable
// tslint:disable:unified-signatures
// tslint:disable:no-console

import {
  PuppetPadpro,
}                 from 'wechaty-puppet-padpro'

async function main () {
  const puppet = new PuppetPadpro()
  console.log(`Puppet v${puppet.version()} smoke testing passed.`)
  return 0
}

main()
.then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})
