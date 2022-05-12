// import { Selector, ClientFunction } from 'testcafe'
import { Selector } from 'testcafe'

// fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`
fixture`Getting Started`.page`http://localhost:3000`

test('index page', async (t) => {
  await t
    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('h1').innerText)
    .eql('Get Started')
})

// test('login layout without Drawer', async (t) => {
//   const drawer = Selector('[data-testid="drawer"]').exists
//   await t.expect(drawer).notOk
// })

// test('login with wrong account', async (t) => {
//   await t
//     .typeText('[data-testid="input-account"]', 'admin@admin.co')
//     .typeText('[data-testid="input-password"]', 'zxcvbnm')
//     .click('[data-testid="submit"]')
//     .expect(Selector('[data-testid="error"]').innerText)
//     .eql('Error: 帳號不存在或密碼錯誤，請重新輸入。')
// })

// test('login success', async (t) => {
//   await t
//     .typeText('[data-testid="input-account"]', 'admin@admin.com')
//     .typeText('[data-testid="input-password"]', 'zxcvbnm')
//     .click('[data-testid="submit"]')

//   const getLocation = ClientFunction(() => document.location.href)
//   await t.expect(getLocation()).contains('http://localhost:3000/')
// })
