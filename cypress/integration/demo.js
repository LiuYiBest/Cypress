//测试百度
describe('baidu',()=>{
    it('bilibili',()=>{
        cy.visit('https://ww.baidu.com')
        cy.get('input','bilibili')
    })
})


