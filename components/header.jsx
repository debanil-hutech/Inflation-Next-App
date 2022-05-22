import classes from './header.module.css';
const Header =() =>{
    return (
        <div className={`d-flex flex-row`} >
            <div className={classes.headbar}>Chart Head</div>
        </div>
    );
};

export default Header;