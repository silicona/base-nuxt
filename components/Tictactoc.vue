<template>
  <div id="tictactoc" class="tictactoc">
    <div class="game-board">
      <Board
        v-bind:cells="history[history.length - 1].cells"
        :onClick="gestionarClick"
      />
    </div>
    <div class="game-info">
      <div>{{ getStatus }}</div>

      <ol>
        <!--<li v-for="move in getMoves" :key=move.id>
          {{ move.val }}
        </li>
        -->
      </ol>
    </div>
  </div>
</template>

<script>
import Board from "@/components/molecules/Board.vue";
import MoveLink from "@/components/atoms/MoveLink.vue";

export default {
  name: "Tictactoc",
  components: {
    Board,
    MoveLink,
  },
  data() {
    return {
      xNext: true,
      stepNumber: 0,
      //moves: this.getMoves()
    };
  },
  props: {
    history: {
      type: Array,
      required: false,
      default: () => [{ cells: Array(9).fill(null) }],
    },
  },
  methods: {
    gestionarClick(i) {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1];
      const cells = current.cells.slice();

      if (this.calculateWinner(cells) || cells[i]) return;

      cells[i] = this.xNext ? "X" : "O";
      this.history.push({ cells: cells });
      this.xNext = !this.xNext;
      this.stepNumber++;

      this.$children[0].$forceUpdate(cells);
    },

    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        )
          return squares[a];
      }
      return null;
    },

    jumpTo(numStep) {
      this.stepNumber = numStep;
      this.xNext = numStep % 2 === 0;
      this.$children[0].$forceUpdate(this.history[numStep].cells);
    },
  },
  computed: {
    getStatus() {
      let winner = false;
      if (this.history.length)
        winner = this.calculateWinner(
          this.history[this.history.length - 1].cells
        );

      if (
        this.history[this.history.length - 1].cells.indexOf(null) === -1 &&
        !winner
      )
        return "Esta vez ha sido un empate. Más suerte la próxima vez";

      return winner
        ? "Felicidades, jugadora " + winner + ". Has ganado!!!"
        : "Próxima jugadora: " + (this.xNext ? "X" : "O");
    },

    getMoves() {
      //return this.history[this.history.legnth - 1].cells;
      const moves = this.history
        .map((step, move) => {
          //console.log(step, move);
          const desc = move ? "Go to move #" + move : "Go to game start";

          return <Movelink move={{ move }} desc={{ desc }} />
              

            //return "<li><button @click=jumpTo()>" + desc + "</button></li>";
            //return `<li id=${ move }><button v-on:click=jumpTo(${ move })>${ desc }</button></li>`
            //return this.$createElement(`<li id=${ move }><button @click=jumpTo(${ move })>${ desc }</button></li>`)
            //({
            /*template: `<li id=${ move }><button @click=jumpTo(${ move })>${ desc }</button></li>`
            /*})*/
          //<!--<button v-bind:click=jumpTo(move)>desc</button>-->
        })
        .reduce((acc, val, ind) => {
          //console.log(ind)
          acc[ind] = { id: ind, val: val };
          return acc;
        }, []);

      return moves;
    },
  },
};
</script>
