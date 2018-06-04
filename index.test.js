const getunit = require('./dist/getunit.umd')

test(`getunit`, () => {
  expect(getunit('1.875em')).toBe('em')
  expect(getunit('1.875rem')).toBe('rem')
  expect(getunit(' 1.875  rem ')).toBe('rem')
  expect(getunit('18px')).toBe('px')
  expect(getunit('18 px')).toBe('px')
  expect(getunit('18 px ')).toBe('px')
  expect(getunit(' 18 px ')).toBe('px')
  expect(getunit(' 18 px')).toBe('px')
  expect(getunit('18')).toBe('')
})
