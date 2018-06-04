const unit = require('./dist/the-unit.umd')

test(`the-unit`, () => {
  expect(unit('1.875em')).toBe('em')
  expect(unit('1.875rem')).toBe('rem')
  expect(unit(' 1.875  rem ')).toBe('rem')
  expect(unit('18px')).toBe('px')
  expect(unit('18 px')).toBe('px')
  expect(unit('18 px ')).toBe('px')
  expect(unit(' 18 px ')).toBe('px')
  expect(unit(' 18 px')).toBe('px')
  expect(unit('18')).toBe('')
})
