import { setEmail } from '../src/main'

describe('setEmail test suite', () => {
    test('email link is set', () => {
        const link = document.createElement('a')
        const email = 'johndoe@domain.ltd'

        setEmail(link, 'johndoe@domain.ltd')

        expect(link.getAttribute('href')).toBe(`mailto:${email}`)
    })
})