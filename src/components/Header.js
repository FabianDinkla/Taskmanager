import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' color='green' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* const headerStyle = {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin: 'auto',
    padding:'auto',
    width:'70vw',
    height:'50px',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '2px solid black',
};
 */
export default Header
