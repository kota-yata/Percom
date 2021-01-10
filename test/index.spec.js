'use strict';
/* eslint no-undef:0 */
const percom = require('../src/index');
const chai = require('chai');

describe('index.js', () => {
  it('per-basic', () => {
    const answer = percom.per([1, 2, 3], 2);
    chai.assert.deepEqual(answer, [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]);
  });
  it('per-error', () => {
    const answerFunc = () => { percom.per([1, 2, 3], 5); };
    chai.expect(answerFunc).to.throw();
  });
  it('countPer-basic', () => {
    const answer = percom.countPer(8, 3);
    chai.assert.deepEqual(answer, 336);
  });
  it('countPer-basic-n', () => {
    const answer = percom.countPer(8, 1);
    chai.assert.deepEqual(answer, 8);
  });
  it('countPer-error', () => {
    const answerFunc = () => { percom.countPer(3, 5); };
    chai.expect(answerFunc).to.throw(Error, 'Number of elements must be greater than number to choose');
  });
  it('com-basic', () => {
    const answer = percom.com([1, 2, 3], 2);
    chai.assert.deepEqual(answer, [[1, 2], [1, 3], [2, 3]]);
  });
  it('com-error', () => {
    const answerFunc = () => { percom.com([1, 2, 3], 5); };
    chai.expect(answerFunc).to.throw(Error, 'Number of elements of array must be greater than number to choose');
  });
  it('countCom-basic', () => {
    const answer = percom.countCom(8, 3);
    chai.assert.deepEqual(answer, 56);
  });
  it('countCom-basic-n', () => {
    const answer = percom.countCom(8, 1);
    chai.assert.deepEqual(answer, 8);
  });
  it('countCom-basic-1', () => {
    const answer = percom.countCom(20, 20);
    chai.assert.deepEqual(answer, 1);
  });
  it('countCom-error', () => {
    const answerFunc = () => { percom.countCom(3, 5); };
    chai.expect(answerFunc).to.throw(Error, 'Number of elements must be greater than number to choose');
  });
});
