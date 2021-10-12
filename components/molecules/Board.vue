<template>
  <div class="board">
    <div class="row">
      <Cell :index="0" :onClick="pasarIndex" :value=cells[0] />
      <Cell :index="1" :onClick="pasarIndex" :value=cells[1] />
      <Cell :index="2" :onClick="pasarIndex" :value=cells[2] />
    </div>
    <div class="row">
      <Cell :index="3" :onClick="pasarIndex" :value=cells[3] />
      <Cell :index="4" :onClick="pasarIndex" :value=cells[4] />
      <Cell :index="5" :onClick="pasarIndex" :value=cells[5] />
    </div>
    <div class="row">
      <Cell :index="6" :onClick="pasarIndex" :value=cells[6] />
      <Cell :index="7" :onClick="pasarIndex" :value=cells[7] />
      <Cell :index="8" :onClick="pasarIndex" :value=cells[8] />
    </div>
  </div>
</template>

<script>
import Cell from "@/components/atoms/Cell.vue";

export default {
  name: "Board",
  created() { },
  components: {
    Cell,
  },
  data() {
    return {
      current: this.cells,
    };
  },
  updated(cells) {
    //console.log('Updated')
    //this.$set(this, this.current, cells)

    this.current = cells;
    /*console.log(this.$children);
    console.log(this.cells);
    this.cells.forEach((jugada, index) => {
      console.log(jugada, index);
    });*/
  },

  props: {
    cells: {
      type: Array,
      required: true,
    },
    onClick: {
      type: Function,
      require: true
    },
  },

  methods: {
    /*getCell(index) {
      return this.current[index];
    },*/
  },
  computed: {
    pasarIndex() {
      return this.onClick;
    },
  },
};
</script>

<style>
</style>

/*
  
class Board extends React.Component {
  /* Viene de Game
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  */

  renderSquare(i) {
    return (<Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>);
  }

  render() {
    //const status = 'Próxima jugadora: ' + (this.state.xIsNext ? 'X' : 'O');
    /* Refactorizado a Game
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Ganadora: ' + winner;
    } else {
      status = 'Próxima jugadora: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    */

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
*/