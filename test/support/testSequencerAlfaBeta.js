const Sequencer = require('@jest/test-sequencer').default;

class TestSequencerAlfaBeta extends Sequencer {
  sort(tests) {
    // Test structure information
    // https://github.com/facebook/jest/blob/6b8b1404a1d9254e7d5d90a8934087a9c9899dab/packages/jest-runner/src/types.ts#L17-L21
    const copyTests = Array.from(tests);
    const orden = copyTests.map(x => x.path).sort()
    let aux = []
    for(var x in copyTests){
      var index = orden.indexOf(copyTests[x].path)
      aux[index] = copyTests[x]
    }
    console.log(aux)
    return aux;
    //return copyTests.sort((testA, testB) => (testA.path > testB.path ? 1 : -1));
  }
}

module.exports = TestSequencerAlfaBeta;