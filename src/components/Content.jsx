import { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item5Clicked: false,
      item6Clicked: false,
    };
  }

  toggleColors(clicked) {
    return {
      backgroundColor: clicked ? 'darkgreen' : 'blue',
      color: clicked ? 'yellow' : 'white',
    };
  }

  render() {
    const { item5Clicked, item6Clicked } = this.state;

    return (
      <section>
        <b>Освіта:</b>
        <p
          id="item5"
          style={this.toggleColors(item5Clicked)}
          onClick={() =>
            this.setState((prevState) => ({
              item5Clicked: !prevState.item5Clicked,
            }))
          }
        >
          Національний технічний університет України &quot;Київський політехнічний інститут ім. Ігоря Сікорського&quot;, м. Київ
        </p>
        <p
          id="item6"
          style={this.toggleColors(item6Clicked)}
          onClick={() =>
            this.setState((prevState) => ({
              item6Clicked: !prevState.item6Clicked,
            }))
          }
        >
          <b>Хоббі:</b>
        </p>
        <ul>
          <li>Програмування</li>
          <li>Комп'ютерні ігри</li>
          <li>Спорт</li>
        </ul>
        <b>Улюблені фільми:</b>
        <ol>
          <li>&quot;Драйв&quot;, 2011</li>
          <li>&quot;На Західному фронті без змін&quot;, 2022</li>
          <li>&quot;Форсаж 10&quot;, 2023</li>
        </ol>
      </section>
    );
  }
}

export default Content;
