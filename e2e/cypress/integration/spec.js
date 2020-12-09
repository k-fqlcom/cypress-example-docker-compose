it('introduction_Box', () => {
  cy.visit('/')
  cy.get('h1').contains('山田太郎の自己紹介')
  cy.get('[class="self-introduction__picture"]').should('have.attr','src','image/kagata.jpg')
  cy.get('.self-introduction > .self-introduction__text > p[name="name"]').contains('Name : 山田太郎')
  cy.get('p').contains('Age : xx歳')
  cy.get('p').contains('From : xx県')
  cy.get('p').contains('TEL : XXX-XXX')
})

it('hoby_Box', () => {
  cy.visit('/')
  cy.get('h2').eq(0).contains('趣味:釣り')
  cy.get('p').eq(4).contains('主にイカ釣りをしています！写真は2年くらい前のもの...')
  cy.get('.hobby__picture').should('have.attr','src','image/ika.JPG')
})

it('favorite_Box', () => {
  cy.visit('/')
  cy.get('h2').eq(1).contains('猫が好き！！')
  cy.get('p').eq(5).contains('画像はそれぞれ実際に撮影したものです！')
  cy.get('p').eq(6).contains('画像をクリックすると地図にジャンプ')
  cy.get('.favorite-link__text').eq(0).contains('xxxx')
  cy.get('.favorite-link__text').eq(1).contains('xxxx')
  
  cy.get('a').eq(0).should('have.attr','href','https://www.google.com/maps/place/%E7%8C%AB%E3%82%AB%E3%83%95%E3%82%A7%E3%82%AF%E3%83%AD/@35.4577386,133.359276,17z/data=!3m1!4b1!4m5!3m4!1s0x3556587b32d24adf:0x5666160dd6110b92!8m2!3d35.4577386!4d133.3614647')
  cy.get('a').eq(1).should('have.attr','href','https://www.google.com/maps?q=%E6%B0%B4%E6%9C%A8%E3%81%97%E3%81%92%E3%82%8B%E3%83%AD%E3%83%BC%E3%83%89&rlz=1C1QABZ_jaJP895JP895&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiMs83R9JTsAhVP05QKHcNvDckQ_AUoAXoECBwQAw')
})

it('slider_box', () => {
  cy.get('[class="slider__picture"]').eq(0).should('have.attr','src','image/SandMuseum1.JPG')
  cy.get('[class="slider__picture"]').eq(1).should('have.attr','src','image/SandMuseum2.JPG')
  cy.get('[class="slider__picture"]').eq(2).should('have.attr','src','image/SandMuseum3.JPG')
  cy.get('[class="slider__picture"]').eq(3).should('have.attr','src','image/SandMuseum4.JPG')
})