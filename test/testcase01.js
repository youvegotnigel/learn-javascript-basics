var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
const{isElementPresent} = require('./validations.js')
log = console.log

before(()=>{


    log('Before Hook')

})


after(()=>{


    log('After Hook')

})

beforeEach(()=>{


    log('Before Each hook')

})


afterEach(()=>{


    log('After Each hook')

})

describe('Mocha validations',()=>{

    let name = 'Rahul'
    it.skip('Validate through should',()=>{

        name.should.equal('Rahul')
        name.should.have.lengthOf(5)
        log(isElementPresent())

        isElementPresent().should.be.true

    })


    it('Validate through expect',()=>{

       expect(name).to.equal('Rahul')
       expect(name).to.have.lengthOf(5)
       expect(isElementPresent()).to.true


    })


    it('Validate through assert',()=>{

       assert.equal(name,'Rahul')
       assert.lengthOf(name,5)
       assert.equal(isElementPresent(),true)

    })


})


describe.skip('Mocha validations2',()=>{

    let name = 'Rahul'
    it.skip('Validate through should2',()=>{

        name.should.equal('Rahul')
        name.should.have.lengthOf(5)
        log(isElementPresent())

        isElementPresent().should.be.true

    })


    it('Validate through expect2',()=>{

       expect(name).to.equal('Rahul')
       expect(name).to.have.lengthOf(5)
       expect(isElementPresent()).to.true


    })


    it('Validate through assert2',()=>{

       assert.equal(name,'Rahul')
       assert.lengthOf(name,5)
       assert.equal(isElementPresent(),true)

    })


})