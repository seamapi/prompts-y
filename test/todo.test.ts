import test from 'ava'

import { todo } from 'prompts-y'

test('todo: returns argument', (t) => {
  t.is(todo('todo'), 'todo', 'returns input')
})
