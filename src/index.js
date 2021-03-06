import { h, render, Component } from 'preact'
import './normalize.css'

const fontColor = '#444'

const css = {
    App: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        color: fontColor,
        letterSpacing: 1.2,
        maxWidth: 700,
        margin: '0 auto'
    },
    Header: {
        title: {
            fontWeight: 200,
            padding: '3vh',
            margin: 0
        },
        textAlign: 'center',
        color: fontColor,
        backgroundColor: '#eee'
    },
    ExpenseInput: {
        wrapper: {
            margin: '0 auto',
            textAlign: 'center'
        },
        title: {
            marginTop: 28,
            fontWeight: 200
        },
        border: `1px solid ${fontColor}`,
        borderRadius: 2,
        padding: 4,
        margin: '-2px 8px',
        textAlign: 'center',
        width: '40%',
        maxWidth: 200
    },
    Down: {
        wrapper: {
            textAlign: 'center',
            paddingTop: 16
        }
    },
    Xpense: {
        wrapper: {
            textAlign: 'center',
            display: 'flex'
        },
        value: {
            padding: 0,
            display: 'inline',
            width: '50%', // 2 props: 50%, 3 props: 33.3%, etc.
            margin: '0.66em'
        }
    }
}

const Header = () => (
    <div style={css.Header}>
        <h1 style={css.Header.title}>Xpend</h1>
    </div>
)

const ExpenseInput = () => (
    <div style={css.ExpenseInput.wrapper}>
        <h3 style={css.ExpenseInput.title}>New Xpense</h3>
        <input style={css.ExpenseInput} type='text' placeholder='name'/>
        <input style={css.ExpenseInput} type='text' placeholder='cost'/>
    </div>
)

const Down = () => (
    <div style={css.Down.wrapper}>
        <img alt='' width='50' height='50' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABOklEQVRoQ+3Y4Q2CMBQE4GMDN1E30MnVCdRNHMG8BJJKQNrrO2jI84+KecXvDhJrh508up04EJDWmoxGohFRAnFpiYKll41G6OhEg9GIKFh62V038uxjuQL40BFpBg8Abv3S5/QUU428ABwB2HNLmAFxAvAAcFmC2MC9MUyKePeIn6tl7h5pCbOIsGb+3ewtYLIQSxD7fEtMNiIHshWmCJELWRtTjCiBrIWhEKUQNYZGMBAVpgrBQrwx1YgaiBfGBVELqcW4ITwgLMYV4QUpxbgjPCG5GAnCG7KEkSEUkDmMHbednW2KJvcT6SaJea3as49/Ndt3kyFUjQyBphg7JmliOJmqkTHG3tseW/ZnhhrCXO7UTECo2IRD0YgwXGrpaISKTTgUjQjDpZaORqjYhEPRiDBcaundNPIFKKR2M+80Pk4AAAAASUVORK5CYII='/>
    </div>
)

const Xpense = ({ name, cost }) => (
    <div style={css.Xpense.wrapper}>
        <p style={css.Xpense.value}>{name}</p>
        <p style={css.Xpense.value}>{cost}</p>
    </div>
)

const xpenses = [
    {
        name: 'sensu beans',
        cost: 13.47
    }, {
        name: 'overload',
        cost: 9.07
    }
]

class App extends Component
{
    state = { xpenses }

    render = (props, state) => (
        <div style={css.App}>
            <Header />
            <ExpenseInput />
            <Down />
            {state.xpenses.map(Xpense)}
        </div>
    )
}

render(<App />, document.body)
