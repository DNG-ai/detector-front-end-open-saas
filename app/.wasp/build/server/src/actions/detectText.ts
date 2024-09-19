import { prisma } from 'wasp/server'

import { detectText } from '../../../../../src/demo-ai-app/operations'


export default async function (args, context) {
  return (detectText as any)(args, {
    ...context,
    entities: {
    },
  })
}
